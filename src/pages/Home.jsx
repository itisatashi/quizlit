import { Link } from "react-router-dom";
import HomeSlideWrapper from "../components/HomeSlideWrapper";
import { FaRegUser, FaArrowRight, FaRegStar } from "react-icons/fa";
import { IoStatsChartSharp, IoSettingsSharp } from "react-icons/io5";

import { LuUsers, LuGamepad } from "react-icons/lu";
import { MdOutlineVideogameAsset, MdAddCircleOutline } from "react-icons/md";

export default function Home() {
  return (
    <section className="home-container">
      <h1 className="home-title">Quiz Battle</h1>
      <p className="home-subtitle">Challenge your knowledge</p>
      <HomeSlideWrapper />
      <div className="action-buttons">
        <Link to="/difficulty" className="button play-now-button">
          <LuGamepad />
          Play Now
        </Link>
        <Link to="addfriends" className="button add-friend-button">
          <MdAddCircleOutline />
          Add Friend
        </Link>
      </div>
      <div className="home-mini-cards">
        <div className="card home-mini-card">
          <span className="icon-container home-mini-card-icon-container">
            <FaRegUser />
          </span>
          <div className="home-mini-card-info">
            <h3 className="home-mini-card-title">Your Profile</h3>
            <p className="home-mini-card-description">
              View your stats and achievements
            </p>
          </div>
          <FaArrowRight className="home-arrow-right-icon" />
        </div>
        <div className="card home-mini-card">
          <span className="icon-container home-mini-card-icon-container">
            <IoStatsChartSharp />
          </span>
          <div className="home-mini-card-info">
            <h3 className="home-mini-card-title">Leaderboard</h3>
            <p className="home-mini-card-description">
              See top players worldwide
            </p>
          </div>
          <FaArrowRight className="home-arrow-right-icon" />
        </div>
        <div className="card home-mini-card">
          <span className="icon-container home-mini-card-icon-container">
            <FaRegStar />
          </span>
          <div className="home-mini-card-info">
            <h3 className="home-mini-card-title">Achievements</h3>
            <p className="home-mini-card-description">Your collected badges</p>
          </div>
          <FaArrowRight className="home-arrow-right-icon" />
        </div>
        <div className="card home-mini-card">
          <span className="icon-container home-mini-card-icon-container">
            <IoSettingsSharp />
          </span>
          <div className="home-mini-card-info">
            <h3 className="home-mini-card-title">Settings</h3>
            <p className="home-mini-card-description">
              Customize your experience
            </p>
          </div>
          <FaArrowRight className="home-arrow-right-icon" />
        </div>
      </div>
    </section>
  );
}
