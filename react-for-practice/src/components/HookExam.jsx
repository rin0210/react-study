import { useState } from "react";
import useInput from "../hooks/useInput";
// 3가지 hook 관련된 팁
// 1. 함수 컴포넌트, 커스텀 훅 내부에서만 호출 가능
// 2. 조건문 또는 반복문 내부에서 호출될 수는 없다.
// 3. ***** 나만의 훅(Custom Hook)을 직접 만들 수 있다. *****

const HookExam = () => {
  const [input, onChangeInput] = useInput();
  const [input2, onChangeInput2] = useInput();

  return (
    <div>
      <input value={input} onChange={onChangeInput}></input>
      <input value={input2} onChange={onChangeInput2}></input>
    </div>
  );
};

export default HookExam;
