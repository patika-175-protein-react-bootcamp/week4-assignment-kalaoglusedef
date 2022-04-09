import React, { useContext } from "react";
import "./scorepage.scss";
import { useNavigate } from "react-router-dom";
import CheckIcon from "../CheckIcon";
import { QuestionsContext } from "../../context/questions";
import Underline from "../Underline";
const StartPage = (props) => {
  let navigate = useNavigate();

  const { score, questions, setTour, tour, restartQuestions, setScore } =
    useContext(QuestionsContext);

  const restart = () => {
    const totalScore = parseInt(localStorage.getItem("totalScore"), 0) || 0;
    const totalQuestions =
      parseInt(localStorage.getItem("totalQuestions"), 0) || 0;
    const correctAnswer =
      parseInt(localStorage.getItem("correctAnswer"), 0) || 0;

    localStorage.setItem("totalScore", totalScore + score);
    localStorage.setItem("totalQuestions", totalQuestions + 10);
    localStorage.setItem(
      "correctAnswer",
      correctAnswer + questions.filter((x) => x.isCorrect).length
    );

    setTour(tour + 1);
    setScore(0);
    restartQuestions();
    navigate("/");
  };
  return (
    <div className="scorePageContainer">
      <div className="leftSide">
        <h1>Final</h1>
        <Underline width={228} />
        <p>Point Score: {score} </p>
        <p>Questions : {10} </p>
        <p>Correct Answers: {questions.filter((x) => x.isCorrect).length} </p>
        <button onClick={restart}>Restart</button>
      </div>
      <div className="rightSide">
        <h1>All Questions</h1>
        <Underline width={350} />
        {questions.map((x) => {
          return (
            <div>
              <p>
                {x.num1} X {x.num2} = {x.trueAnswer}
              </p>
              <CheckIcon isSuccess={x.isCorrect}></CheckIcon>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default StartPage;
