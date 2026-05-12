import { useEffect, useState } from 'react'
import './App.css'
import { supabase } from './lib/supabase';

// [{ 
// id: String,
// text: String,
// completed: Boolean,
// }]

function App() {
  const [inputValue, setInputValue] = useState('');
  const [todos, setTodos] = useState([]);

  // 데이터 조회(READ)
  // 컴포넌트가 렌더링이 끝난 후 딱 1회만 가져오면 되니까 useEffect(() => { }, []); 여기서 []빈 배열 사용
  // Supabase의 todos 테이블의 데이터를 가져온 후에
  // setTodos를 활용해서 todos 업데이트
  useEffect(() => {
    const fetchTodos = async () => {
      try {
        let { data: data, error } = await supabase
          .from('todos')
          .select('*')
          .order('created_at', { ascending: false })

        if (error) {
          console.log(error);
          return;
        }

        setTodos(data || []); // data가 없을때는 빈배열을 set해준다.

      } catch (error) {
        console.log(error);
      }
    };

    fetchTodos();
  }, []);

  // 데이터 추가(CREATE)
  const addTodo = async (e) => {
    e.preventDefault();

    try {
      const { data } = await supabase
        .from('todos')
        .insert([
          { text: inputValue },
        ])
        .select()

      console.log("data : ", data);

      if (data && data.length > 0) {
        setTodos([data[0], ...todos]);
      }
      setInputValue("");

    } catch (error) {
      console.log(error);
    }
  }

  console.log(inputValue);

  // 데이터 수정(UPDATE)
  const toggleTodo = async (id) => {
    try {
      // id에 해당하는 todo 데이터 객체를 가져올 것(completed 값!)
      // id에 해당하는 supabase todo 데이터 객체에 completed 값을 없데이트
      // setTodos 로 데이터 업데이트

      // 업데이트 할 todo
      const todo = todos.find(t => t.id === id);

      if (!todo) return;

      const { data, error } = await supabase
        .from('todos')
        .update({ completed: !todo.completed })
        .eq('id', id)
        .select()

      if (error) {
        console.log(error);
        return;
      }

      if (data && data.length > 0) {
        setTodos(
          todos.map((todo) =>
            todo.id === id ? data[0] : todo)
        )
      }

    } catch (error) {
      console.log(error);
    }
  }

  // 데이터 삭제(DELETE)
  const deleteTodo = async (id) => {
    try {
      const { error } = await supabase
        .from('todos')
        .delete()
        .eq('id', id)

      if (error) {
        console.log(error);
        return;
      }

      setTodos(
        todos.filter((todo) => todo.id != id)
      )

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className='app'>
        <div className='todo-container'>
          <header className='header'>
            <h1>💕Todo List</h1>
            <p className='subtitle'>일정을 체계적으로 관리하세요.</p>
          </header>
          <form className='input-form' onSubmit={addTodo}>
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="새로운 할 일을 입력하세요."
              className="todo-input"
            />
            <button type="submin" className="add-button">추가</button>
          </form>
          <div className="todo-list">
            {
              todos.length === 0 ? (
                <div className="empty-state"> 아직 할 일이 없습니다.</div>
              ) : (
                todos.map((todo, index) => (
                  <div key={index} className={`todo-item ${todo.completed ? "completed" : ""}`}>
                    <label className="todo-checkbox">
                      <input
                        type="checkbox"
                        checked={todo.completed}
                        onChange={() => toggleTodo(todo.id)}
                      />
                    </label>
                    <span className="todo-text">{todo.text}</span>
                    <button
                      className="delete-button"
                      onClick={() => deleteTodo(todo.id)}
                    >
                      🗑
                    </button>
                  </div>
                ))
              )
            }
          </div>
        </div >
      </div >
    </>
  )
}

export default App
