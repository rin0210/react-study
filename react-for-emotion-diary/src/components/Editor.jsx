import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { emotionList } from "../util/constants";
import { getStringedDate } from "../util/get-stringed-date";

const Editor = ({ initData, onSubmit }) => {
  const nav = useNavigate();

  const [input, setInput] = useState(
    initData
      ? { ...initData, createdDate: new Date(Number(initData.createdDate)) }
      : { createdDate: new Date(), emotionId: 3, content: "" },
  );

  const onChangeInput = (e) => {
    console.log(e.target.name); // 어떤 요소에 입력이 들어온건지
    console.log(e.target.value); //입력된 값이 무엇인지?

    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({ ...input, [name]: value });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  };

  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input
          name="createdDate"
          onChange={onChangeInput}
          value={getStringedDate(input.createdDate)}
          type="date"
        ></input>
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              onClick={() =>
                onChangeInput({
                  target: {
                    name: "emotionId",
                    value: item.emotionId,
                  },
                })
              } // 이건 컴포넌트이기 때문에 이벤트 객체가 자동으로 전달되지 않으므로 별도로 이벤트 객체를 만들어주여야한다.
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === input.emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          placeholder="오늘은 어땠나요?"
        ></textarea>
      </section>
      <section className="button_section">
        <Button onClick={() => nav(-1)} text={"취소하기"} />
        <Button
          onClick={onClickSubmitButton}
          text={"작성완료"}
          type={"POSITIVE"}
        />
      </section>
    </div>
  );
};

export default Editor;
