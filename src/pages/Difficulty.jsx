import React from "react";
import { Link } from "react-router-dom";
import { BiLeaf } from "react-icons/bi";
import { MdOutlineElectricBolt } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { IoArrowBack } from "react-icons/io5";

export default function Difficulty() {
  return (
    <section className="difficulty-container">
      <Link to="/home" className="back-button">
        <IoArrowBack /> <span>Back</span>
      </Link>
      <h1>Select Difficulty</h1>
      <p>Choose your challenge level</p>
      <div className="difficulty-level-cards-container">
        <Link to="/opponent">
          <div className="card level-card">
            <span className="icon-container">
              <BiLeaf />
            </span>
            <h3>Beginner</h3>
            <p>Easy questions to get started</p>
          </div>
        </Link>
        <Link to="/opponent">
          <div className="card level-card">
            <span className="icon-container">
              <MdOutlineElectricBolt />
            </span>
            <h3>Intermediate</h3>
            <p>Moderately challenging questions</p>
          </div>
        </Link>
        <Link to="/opponent">
          <div className="card level-card">
            <span className="icon-container">
              <FaFire />
            </span>
            <h3>Advanced</h3>
            <p>Difficult questions for experts</p>
          </div>
        </Link>
      </div>
    </section>
  );
}
