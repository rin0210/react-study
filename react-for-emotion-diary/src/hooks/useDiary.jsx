import { useContext, useEffect } from "react";
import { DiaryStateContext } from "../contexts/DiaryContext";
import { useNavigate } from "react-router";

const useDiary = (id) => {
  //함수명 앞에 use가 붙으면 이건 커스텀훅이 된다.
  const nav = useNavigate();
  const data = useContext(DiaryStateContext);

  const currentDiaryItem = data.find((item) => String(item.id) === String(id));

  useEffect(() => {
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
  }, [id]);

  return currentDiaryItem;
};

export default useDiary;
