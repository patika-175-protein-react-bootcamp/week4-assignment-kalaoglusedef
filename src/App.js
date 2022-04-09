import "./App.css";
import QuestionsPage from "./components/QuestionsPage";
import StartPage from "./components/StartPage";
import ScorePage from "./components/ScorePage";

import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <Routes>
      <Route path="/" element={<StartPage />}></Route>
      <Route path="/questions" element={<QuestionsPage />}></Route>
      <Route path="/score" element={<ScorePage />}></Route>
    </Routes>
  );
}

export default App;
