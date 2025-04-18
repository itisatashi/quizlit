import React from "react";
import { useLocation, useNavigate, Link } from "react-router-dom";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { LuListChecks } from "react-icons/lu";
import { VscDebugRestart } from "react-icons/vsc";
import { AiOutlineHome } from "react-icons/ai";

export default function Results() {
  const location = useLocation();
  const navigate = useNavigate();
  const { totalScores, totalQuestions } = location.state;
  const percentage = (totalScores / totalQuestions) * 100;

  return (
    <section className="results-container">
      <h1>Quiz results</h1>
      <p>Quiz completed</p>
      <div className="results-card">
        <div style={{ width: 120, height: 100 }}>
          <CircularProgressbar
            value={percentage}
            text={`${totalScores}/${totalQuestions}`}
            styles={buildStyles({
              textSize: "23px",
              pathColor: "#00b4d8",
              textColor: "#343a40",
            })}
          />
        </div>
        <h2>{percentage > 50 ? "Excellent" : "Keep trying!"}</h2>
        <div className="results-card-buttons">
          <button className="button" onClick={() => navigate("/review")}>
            <LuListChecks />
            Review Answers
          </button>
          <button className="button" onClick={() => navigate("/difficulty")}>
            <VscDebugRestart />
            Play Again
          </button>
          <button className="button" onClick={() => navigate("/")}>
            <AiOutlineHome />
            Back to Home
          </button>
        </div>
      </div>
    </section>
  );
}
