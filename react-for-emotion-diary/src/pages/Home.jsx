//import { useSearchParams } from "react-router"; //QueryString 으로 동적 경로 라우팅
import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";
import { useContext, useState } from "react";
import { StaticRouterProvider } from "react-router";
import { DiaryStateContext } from "../contexts/DiaryContext";

const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(), // 해당년도
    pivotDate.getMonth(), // 해당월
    1, //1일의
    0, //0시
    0, //0분
    0, //0초
  ).getTime();

  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0, //해당 달의 마지막 날로 설정됨
    23,
    59,
    59,
  ).getTime();

  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime,
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext);
  //const [params, setParams] = useSearchParams();
  // setParams에는 특정 QueryString의 값을 변경할 수 있는 함수가 들어온다.
  //console.log(params.get("value"));

  const [pivotDate, setPivotDate] = useState(new Date());
  const monthlyData = getMonthlyData(pivotDate, data);

  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };

  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      ></Header>
      <DiaryList data={monthlyData} />
    </div>
  );
};

export default Home;
