import { useReducer, useRef } from "react";
import "./App.css";
import { Routes, Route, Link, useNavigate, data } from "react-router";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import {
  DiaryStateContext,
  DiaryDispatchContext,
} from "./contexts/DiaryContext";

// 1. "/": 모든 일기를 조회하는 Home 페이지
// 2. "/new": 새로운 일기를 작성하는 New 페이지
// 3. "/diary": 일기를 상세히 조회하는 Diary페이지

const mockData = [
  {
    id: 1,
    createdDate: new Date("2026-05-14").getTime(),
    emotionId: 1,
    content: "1번 일기장 내용",
  },
  {
    id: 2,
    createdDate: new Date("2026-05-15").getTime(),
    emotionId: 2,
    content: "2번 일기장 내용",
  },
  {
    id: 3,
    createdDate: new Date("2026-05-16").getTime(),
    emotionId: 3,
    content: "3번 일기장 내용",
  },
  {
    id: 4,
    createdDate: new Date("2026-04-13").getTime(),
    emotionId: 4,
    content: "4번 일기장 내용",
  },
  {
    id: 5,
    createdDate: new Date("2026-06-15").getTime(),
    emotionId: 5,
    content: "5번 일기장 내용",
  },
];

function reducer(state, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
    case "UPDATE":
      return state.map((item) =>
        String(item.id) === String(action.data.id) ? action.data : item,
      );
    case "DELETE":
      return state.filter((item) => String(item.id) !== String(action.id));
    default:
      return state;
  }
}

function App() {
  const [data, dispatch] = useReducer(reducer, mockData);
  const idRef = useRef();

  // 새로운 일기 추가
  const onCreate = (createdDate, emotionId, content) => {
    // 새로운 일기를 추가하는 기능
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };
  // 기존 일기 수정
  const onUpdate = (id, createdDate, emotionId, content) => {
    dispatch({
      type: "UPDATE",
      data: {
        id,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  // 기존 일기 삭제
  const onDelete = (id) => {
    dispatch({
      type: "DELETE",
      id,
    });
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider
          value={{
            onCreate,
            onUpdate,
            onDelete,
          }}
        >
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/new" element={<New />}></Route>
            <Route path="/diary/:id" element={<Diary />}></Route>
            {/* :id -> 이렇게 적으면 동적 경로인 URL 파라미터를 의미한다. */}
            <Route path="/edit/:id" element={<Edit />}></Route>
            <Route path="*" element={<Notfound />}></Route>
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
