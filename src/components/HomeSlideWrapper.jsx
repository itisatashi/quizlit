import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { GoTrophy } from "react-icons/go";
import { LuUsers } from "react-icons/lu";
import { MdOutlineVideogameAsset } from "react-icons/md";

export default function SimpleSlider() {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="home-slider-container">
      <Slider {...settings}>
        <div className="home-slide-card">
          <GoTrophy />
          <h3>Top Scores</h3>
          <p>Beat your record</p>
        </div>
        <div className="home-slide-card">
          <LuUsers />
          <h3>Multiplayer</h3>
          <p>Challenge your friends</p>
        </div>
        <div className="home-slide-card">
          <MdOutlineVideogameAsset />
          <h3>Daily Challenge</h3>
          <p>New quizzes every day</p>
        </div>
      </Slider>
    </div>
  );
}
