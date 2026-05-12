import { useState, useEffect } from 'react'
import Button from './Button'
import styles from './App.module.css'

// 1. 아래와 같이 function을 짧게 쓰는 방식을 요즘에 많이 사용한다.
// function Hello() {
//   useEffect(() => {
//     console.log("created :)");
//     return () => console.log("destroyed :("); // cleanup function: component가 destroy될 때 반응함.(function을 return해 줌.)
//   }, [])
//   return <h1>Hello</h1>
// }

// 2. 이렇게 따로따로 function을 사용하는 것 보다는 위와 같은 방법(1)을 선호한다. 
function Hello() {
  const destroyedFn = () => {
    console.log("destroyed :(")
  }
  const effectFn = () => {
    console.log("created :)");
    return destroyedFn; // 컴포넌트가 destroy될 때도 반응하고 싶으면, effectFn이 destroyedFn을 return해주면 된다.
  }
  useEffect(effectFn, [] )
    
   // return () => console.log("destroyed :("); // cleanup function: component가 destroy될 때 반응함.
  //}, [])
  return <h1>Hello</h1>
}

function App() {
  const [counter, setValue] = useState(0)
  const [keyword, setKeyword] = useState("")
  const [showing, setShowing] = useState(false)
  const onClick = () => setValue((prev) => prev + 1)
  const onChange = (event) => setKeyword(event.target.value) // onChange={onChange}함수가 작동될때 argument로 event를 받아, 그리고 event를 발생시킨 input에서 value를 받아서 그 value를 'keyword'state에 넣어준다.
  const onClickShow = () => setShowing((prev) => !prev)

  console.log("i run all the time")
  useEffect(() => { console.log("CALL THE API...") }, []) // 코드가 딱 한번만 실행될 수 있도록 보호해주는 함수
  useEffect(() => {
    if (keyword !== null && keyword.length > 5) {
      console.log("SEARCH FOR", keyword)
    }
  }, [keyword]) // keyword 가 변화할때만 이 코드를 실행시켜라 라는 의미

  return (
    <>
      {/* <h1 className={styles.title}>Welcome back!</h1> */}
      {/* <Button text={"Continue"} /> */}
      <input value={keyword} onChange={onChange} type="text" placeholder="Search here..." />
      <h1>{counter}</h1 >
      <button onClick={onClick}>click me</button>
      {showing ? <Hello /> : null} {/* 자바스크립트를 쓸 때는 중괄호를 사용한다. */}
      <button onClick={onClickShow}>{showing ? "Hide" : "Show"}</button>
    </>
  )
}

export default App
