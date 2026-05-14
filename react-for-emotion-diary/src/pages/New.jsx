import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router";
import { DiaryDispatchContext } from "../contexts/DiaryContext";
import { useContext } from "react";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true }); //작성완료 버튼 클릭 후, Home으로 이동 , 두번째 인수는 뒤로가기를 방지하면서 페이지를 이동시키는 옵션이 replace
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
        // -1을 넘겨주면 페이지를 뒤로 이동시켜준다.
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};

export default New;
