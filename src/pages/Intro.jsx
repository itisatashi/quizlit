import { Link } from "react-router-dom";
import { LuBrain, LuLogIn, LuUserPlus } from "react-icons/lu";

export default function Intro() {
  return (
    <section className="intro-container">
      <div className="intro-content">
        <span className="icon-container">
          <LuBrain />
        </span>
        <h1 className="intro-title">Quiz Battle</h1>
        <p className="intro-description">Test your knowledge</p>
      </div>
      <div className="intro-button-group">
        <Link className="button" to="/login">
          <LuLogIn />
          Login
        </Link>
        <Link className="button">
          <LuUserPlus />
          Register
        </Link>
      </div>
    </section>
  );
}
