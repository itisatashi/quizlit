import React from "react";
import { Link } from "react-router-dom";
import { LuBot, LuUsers } from "react-icons/lu";
import { IoArrowBack } from "react-icons/io5";

export default function Opponent() {
  return (
    <section className="opponent-container">
      <Link to="/difficulty" className="back-button">
        <IoArrowBack /> <span>Back</span>
      </Link>
      <h1>Choose Opponent</h1>
      <p>Who will you play against?</p>
      <div className="opponent-cards">
        <div className="card opponent-card">
          <span className="icon-container">
            <LuBot />
          </span>
          <h3>AI opponent</h3>
          <p>Challenge our intelligent AI</p>
          <Link to="/quiz" className="button link-button">
            Play Now
          </Link>
        </div>
        <div className="card opponent-card">
          <span className="icon-container">
            <LuUsers />
          </span>
          <h3>Real Player</h3>
          <p>Challenge another quiz enthuasiast</p>
          <Link to="/searching" className="button link-button">
            Find Match
          </Link>
        </div>
      </div>
    </section>
  );
}
