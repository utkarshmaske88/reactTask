import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Main from "./component/layout";
import Homepage from "./component/Home";
import Layount2 from "./component/layout2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="clientmaster" element={<Main />} />
        <Route path="lastone" element={<Layount2 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
