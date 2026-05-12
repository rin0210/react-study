import { useState, useEffect } from 'react'

function App() {
    const [toDo, setToDo] = useState("")
    const [toDos, setToDos] = useState([])
    const onChange = (event) => setToDo(event.target.value)
    const onSubmit = (event) => {
        event.preventDefault(); // 버튼을 눌렀을 때 브라우저가 습관적으로 페이지를 전체 새로고침(Refresh)하는 것을 막아주는 기능
        if (toDo === "") {
            return;
        }
        setToDos((currentArray) => [toDo, ...currentArray]);
        //setToDos(function(currentArray))와 같아, currentArray를 받아오는 함수
        //currentArray에 toDo를 추가한다.
        setToDo("");
    }
    console.log(toDos);
    return (
        <>
            <h1>My To Dos ({toDos.length})</h1>
            <form onSubmit={onSubmit}>
                <input
                    onChange={onChange}
                    value={toDo}
                    type="text"
                    placeholder="Write yoru to do...">
                </input>
                <button>Add To Do</button>
            </form>
            <hr />
            <ul>
                {toDos.map((item, index) => (<li key={index}>{item}</li>))} {/* map(): 하나의 array에 있는 item을 원하는 무엇이든지 바꿔주고 새로운 array로 return해준다. 자바스크립트 기능 */}
            </ul>

        </>
    )
}

export default App
