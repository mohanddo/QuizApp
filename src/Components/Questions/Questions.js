import { Link } from "react-router-dom";
import data from "./data.json";
import { useState } from "react";
import styles from "./Questions.module.css";
import ProgressBar from "@ramonak/react-progress-bar";

function Questions({ subject }) {
  const [index, setIndex] = useState(0);
  const [answerState, setAnswerState] = useState("Unselected");
  const [score, setScore] = useState(0);

  const quiz = data.quizzes.find((quiz) => quiz.title === subject);
  let quiz_end = index === quiz.questions.length;
  let question = quiz_end
    ? quiz.questions[quiz.questions.length - 1]
    : quiz.questions[index];
  let answer;

  function handleClick(option) {
    answer = option;
    // const optionButtons = document.querySelectorAll(`.${styles.option}`);
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
      <p>{`Question ${index + 1} of ${quiz.questions.length}`}</p>
      <p>{question.question}</p>

      <ProgressBar
        barContainerClassName={styles.barContainer}
        height="8px"
        completed={score}
        maxCompleted={quiz.questions.length}
        bgColor="#A729F5"
        isLabelVisible={false}
      />

      <div>
        {question.options.map(function callback(option) {
          return (
            <button
              className={styles.option}
              key={option}
              onClick={() => {
                handleClick(option);
              }}
            >
              <span className={styles.letter}>A</span>
              {option}
            </button>
          );
        })}

        {quiz_end ? (
          <Link to={"/Score"}>See Result</Link>
        ) : (
          <button
            className={styles.SubmitandNextButton}
            onClick={answerState === "Unselected" ? handleSubmit : handleNext}
          >
            {answerState === "Unselected" ? "Submit" : "Next"} Answer
          </button>
        )}
      </div>
    </>
  );
}

export default Questions;
