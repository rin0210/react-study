//createBrowserRouter 등 최신 방식 으로 변경해보기
import { BrowserRouter as Router, Routes, Route } from "react-router";
import Home from "./routes/Home"
import Detail from "./routes/Detail";

function App() {
    return <Router>
        <Routes>
            <Route path="/movie/:id" element={<Detail />}></Route> {/* : <-이걸 쓰지 않으면 그냥 텍스트id로 인식해서 /movie/id로 이동이 된다. :를 쓰면 1,2,3,4 등의 id 로 인식됨 */}
            <Route path="/" element={<Home />}></Route>
        </Routes>
    </Router>
}

export default App
