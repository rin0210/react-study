import { useState, useRef } from "react";

// 간단한 회원가입 폼
// 1. 이름
// 2. 생년월일
// 3. 국적
// 4. 자기소개
const Register = () => {
  //   const [name, setName] = useState("");
  //   const [birth, setBirth] = useState("");
  //   const [country, setCountry] = useState("");
  //   const [bio, setBio] = useState("");
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });

  const countRef = useRef(0);
  //Reference객체를 생성 /userState: State를 생성 -> 둘 다 컴포넌트 내부의 변수로 활용 가능하나, 차이점은 userState는 값이 변경되면 컴포넌트 리렌더링을 하지만, useRef는 어떤 경우에도 리렌더링을 유발하지 않는다.
  //console.log("Register 렌더링");
  const inputRef = useRef();

  const onChange = (e) => {
    countRef.current++;
    console.log(countRef.current);

    setInput({
      ...input,
      [e.target.name]: e.target.value, //[e.target.name] -> 프로퍼티 키를 만들어준다. name: e.target.value, birth: e.target.value 식으로 만들어주는 것
    });
  };
  //   const onChangeName = (e) => {
  //     setInput({
  //       ...input, //(변경하지 않는)관련없는 값들은 그대로 유지하도록 만듦.
  //       name: e.target.value,
  //     });
  //     //setName(e.target.value);
  //   };

  //   const onChangeBirth = (e) => {
  //     setInput({
  //       ...input,
  //       birth: e.target.value,
  //     });
  //     //setBirth(e.target.value);
  //   };

  //   const onChangeCountry = (e) => {
  //     setInput({
  //       ...input,
  //       country: e.target.value,
  //     });
  //     //setCountry(e.target.value);
  //   };

  //   const onChangeBio = (e) => {
  //     setInput({
  //       ...input,
  //       bio: e.target.value,
  //     });
  //     //setBio(e.target.value);
  //   };

  const onSubmit = () => {
    if (input.name === "") {
      //이름을 입력하는 DOM 요소 포커스
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder="이름"
        />
      </div>
      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        />
      </div>
      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option>선택</option>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
      </div>
      <div>
        <textarea name="bio" value={input.bio} onChange={onChange} />
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
