import { useState } from "react";
import "./App.css";
// import Header from './components/Header'
// import Main from './components/Main'
// import Footer from './components/Footer'
// import Button from './components/Button'
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

function App() {
  // const buttonProps = {
  //   text: "메일",
  //   color: "red",
  //   a: 1,
  //   b: 2,
  //   c: 3,
  // }

  return (
    <>
      {/* <Header />
      <Main />
      <Footer />
      <h1>안녕 리액트!</h1> */}
      {/* <Button {...buttonProps} />
      <Button text={"카페"} color={"green"} />
      <Button text={"블로그"} >
        <div>
          자식 요소 */}
      {/* html요소는 children이라는 props명을 가지고 전달이된다. */}
      {/* </div>
      </Button> */}
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
