import { createContext, useState, useContext } from "react";

export const QuestionsContext = createContext();

const QuestionsProvider = ({ children }) => {
  const getQuestions = () => {
    let questions = [];

    for (var i = 0; i < 10; i++) {
      const num1 = Math.floor(Math.random() * 10 + 1);
      const num2 = Math.floor(Math.random() * 10 + 1);
      const options = [num1 * num2, (num1 - 1) * num2, (num2 - 1) * num1];

      const count = Math.floor(Math.random() * 10 + 1);

      for (var k = 0; k < count; k++) {
        options.push(options.shift());
      }

      questions.push({
        num1: num1,
        num2: num2,
        options: options,
        isCorrect: false,
        trueAnswer: num1 * num2,
      });
    }

    return questions;
  };

  const [questions, setQuestions] = useState(getQuestions());

  const [score, setScore] = useState(0);
  const [tour, setTour] = useState(1);

  const restartQuestions = () => {
    setQuestions(getQuestions());
  };

  return (
    <QuestionsContext.Provider
      value={{
        questions,
        tour,
        score,
        setScore,
        setTour,
        setQuestions,
        restartQuestions,
      }}
    >
      {children}
    </QuestionsContext.Provider>
  );
};

export default QuestionsProvider;
