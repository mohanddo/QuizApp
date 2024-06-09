import { useParams, Link } from "react-router-dom";
import data from "./data.json";
import { useState } from "react";

function Questions() {
  const { subject } = useParams();
  const [index, setIndex] = useState(0);
  const [answerState, setAnswerState] = useState("Unselected");
  const [score, setScore] = useState(0);

  const quiz = data.quizzes.find((quiz) => quiz.title === subject);
  let quiz_end = index === quiz.questions.length;
  let question = quiz_end ? quiz.questions.length - 1 : quiz.questions[index];
  let answer;

  function handleClick(option) {
    answer = option;
  }

  function handleSubmit() {
    if (answer === question.answer) {
      setAnswerState("Correct");
      setScore(score + 1);
    } else if (answer !== question.answer && typeof answer !== "undefined") {
      setAnswerState("Incorrect");
    }
  }

  function handleNext() {
    setIndex(index + 1);
    setAnswerState("Unselected");
  }

  return (
    <>
      <header>{<h2>{quiz.title}</h2>}</header>
      <main>
        <p>{`Question ${index + 1} of ${quiz.questions.length}`}</p>
        <p>{question.question}</p>
        <div>
          {question.options.map(function callback(option) {
            return (
              <button
                key={option}
                onClick={() => {
                  handleClick(option);
                }}
              >
                {option}
              </button>
            );
          })}

          {quiz_end ? (
            <Link to={"/"}>See Result</Link>
          ) : (
            <button
              onClick={answerState === "Unselected" ? handleSubmit : handleNext}
            >
              {answerState === "Unselected" ? "Submit" : "Next"} Answer
            </button>
          )}
        </div>
      </main>
    </>
  );
}

export default Questions;
