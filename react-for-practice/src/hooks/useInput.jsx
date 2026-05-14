import { useState } from "react";

function useInput() {
  //리액트는 use라는 접두사를 사용하는 함수를 내부적으로 커스텀 훅으로 인식한다.
  const [input, setInput] = useState("");

  const onChangeInput = (e) => {
    setInput(e.target.value);
  };

  return [input, onChangeInput];
}

export default useInput;
