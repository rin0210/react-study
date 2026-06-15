import { useEffect, useState } from "react";
import "./App.css";
import { Routes, Route } from "react-router";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Edit from "./pages/Edit";
import Notfound from "./pages/Notfound";
import {
  DiaryStateContext,
  DiaryDispatchContext,
} from "./contexts/DiaryContext";
import axios from "axios";
import { getStringedDate } from "./util/get-stringed-date";

const API_BASE = "http://localhost:8080/api/diaries";

// 백엔드 응답 row → 앱에서 쓰는 형태로 변환
const mapToAppData = (row) => {
  const [y, m, d] = row.created_date.split("-").map(Number);
  return {
    id: row.id,
    createdDate: new Date(y, m - 1, d).getTime(), // 로컬 시간 기준
    emotionId: row.emotion_id,
    content: row.content,
  };
};

function App() {
  const [data, setData] = useState([]);

  // READ
  useEffect(() => {
    axios
      .get(API_BASE)
      .then((res) => setData(res.data.map(mapToAppData)))
      .catch(console.error);
  }, []);

  // CREATE
  const onCreate = async (createdDate, emotionId, content) => {
    try {
      const res = await axios.post(API_BASE, {
        created_date: getStringedDate(new Date(createdDate)),
        emotion_id: emotionId,
        content,
      });
      setData((prev) => [mapToAppData(res.data), ...prev]);
    } catch (err) {
      console.error(err);
    }
  };

  // UPDATE
  const onUpdate = async (id, createdDate, emotionId, content) => {
    try {
      const res = await axios.put(`${API_BASE}/${id}`, {
        created_date: getStringedDate(new Date(createdDate)),
        emotion_id: emotionId,
        content,
      });
      setData((prev) =>
        prev.map((item) =>
          String(item.id) === String(id) ? mapToAppData(res.data) : item,
        ),
      );
    } catch (err) {
      console.error(err);
    }
  };

  // DELETE
  const onDelete = async (id) => {
    try {
      await axios.delete(`${API_BASE}/${id}`);
      setData((prev) => prev.filter((item) => String(item.id) !== String(id)));
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <>
      <DiaryStateContext.Provider value={data}>
        <DiaryDispatchContext.Provider value={{ onCreate, onUpdate, onDelete }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/new" element={<New />} />
            <Route path="/diary/:id" element={<Diary />} />
            <Route path="/edit/:id" element={<Edit />} />
            <Route path="*" element={<Notfound />} />
          </Routes>
        </DiaryDispatchContext.Provider>
      </DiaryStateContext.Provider>
    </>
  );
}

export default App;
