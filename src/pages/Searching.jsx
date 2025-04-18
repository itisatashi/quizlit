import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { ClipLoader } from "react-spinners";
import { IoPlayOutline } from "react-icons/io5";
import { LuUsers } from "react-icons/lu";

export default function Searching() {
  const navigate = useNavigate();
  const [searching, setSearching] = useState(true);

  useEffect(() => {
    setTimeout(() => setSearching(false), 2000);
  }, []);

  return (
    <section className="searching-container">
      {searching ? (
        <div className="searching-content">
          <ClipLoader color="#36d7b7" size={60} width={100} margin={2} />
          <h2>Searching for an opponent</h2>
          <p>Please wait a moment</p>
        </div>
      ) : (
        <div className="opponent-found">
          <span className="icon-container">
            <LuUsers />
          </span>
          <h2>Opponent Found</h2>
          <p>Ready to play</p>
          <button
            className="button"
            onClick={() => {
              navigate("/quiz");
            }}
          >
            <IoPlayOutline /> Start Quiz
          </button>
        </div>
      )}
    </section>
  );
}
