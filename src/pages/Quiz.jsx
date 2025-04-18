import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Quiz() {
  const navigate = useNavigate();
  const questions = [
    {
      id: 1,
      question: "Which planet is known as the Red Planet?",
      options: ["Mars", "Earth", "Jupiter", "Saturn"],
      correctAnswer: "Mars",
    },
    {
      id: 2,
      question: "What is the capital of France?",
      options: ["Berlin", "Madrid", "Paris", "Rome"],
      correctAnswer: "Paris",
    },
    {
      id: 3,
      question: "What is 2 + 2?",
      options: ["3", "4", "5", "6"],
      correctAnswer: "4",
    },
    {
      id: 4,
      question: "Which gas do plants absorb from the atmosphere?",
      options: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"],
      correctAnswer: "Carbon Dioxide",
    },
    {
      id: 5,
      question: "What is the largest ocean on Earth?",
      options: ["Atlantic", "Indian", "Arctic", "Pacific"],
      correctAnswer: "Pacific",
    },
  ];

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  const currentQuestion = questions[currentQuestionIndex];
  const isLastQuestion = currentQuestionIndex === questions.length - 1;

  function handleSelectedOption(option) {
    if (!isSubmitted) {
      setIsSubmitted(true);
      setSelectedAnswer(option);
      if (currentQuestion.correctAnswer === option) {
        setScore((prevScore) => prevScore + 1);
      }
    }
  }

  function handleNextQuestion() {
    if (isSubmitted) {
      setIsSubmitted(false);
      setSelectedAnswer(null);
      if (isLastQuestion) {
        navigate("/results", {
          state: { totalScores: score, totalQuestions: questions.length },
        });
      } else {
        setCurrentQuestionIndex((prevQ) => prevQ + 1);
      }
      console.log(score);
    }
  }

  const quizOptions = questions[currentQuestionIndex].options.map((option) => {
    let optionClassNames = "quiz-option-button";
    if (isSubmitted) {
      if (option === currentQuestion.correctAnswer)
        optionClassNames += " correct";
      else if (option === selectedAnswer) optionClassNames += " wrong";
    }

    return (
      <button
        key={option}
        className={optionClassNames}
        onClick={() => handleSelectedOption(option)}
      >
        {option}
      </button>
    );
  });

  return (
    <section className="quiz-container">
      <div className="quiz-progress-container">
        <p className="quiz-progress-text">
          Question {currentQuestionIndex + 1}/{questions.length}
        </p>
        <span className="quiz-progress-percentage">
          {Math.round(((currentQuestionIndex + 1) / questions.length) * 100)}%
        </span>
        <progress
          value={
            (currentQuestionIndex + (isSubmitted ? 1 : 0)) *
            (100 / questions.length)
          }
          className="quiz-progress-bar"
          max={100}
        />
      </div>
      <div className="quiz-question-container">
        <h3 className="quiz-question-text">
          {questions[currentQuestionIndex].question}
        </h3>
        <div className="quiz-options-container">{quizOptions}</div>
        <button
          className="button quiz-next-button"
          onClick={() => handleNextQuestion()}
          disabled={!isSubmitted}
        >
          {isLastQuestion ? "Complete Quiz" : "Next question"}
        </button>
      </div>
    </section>
  );
}
