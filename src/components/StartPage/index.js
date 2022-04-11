import React from "react";
import "./startpage.scss";
import { useNavigate } from "react-router-dom";
import Underline from "../Underline";
const StartPage = (props) => {
  let navigate = useNavigate();
  return (
    <div className="startPageContainer">
      <h1>Mathematics Game</h1>
      <Underline />
      <p>Total Score: {localStorage.getItem("totalScore") || 0} </p>
      <p>Total Questions: {localStorage.getItem("totalQuestions") || 0}</p>
      <p>Correct Answers: {localStorage.getItem("correctAnswer") || 0}</p>
      <button
        onClick={() => {
          navigate("/questions");
        }}
      >
        Start
      </button>
    </div>
  );
};

export default StartPage;
