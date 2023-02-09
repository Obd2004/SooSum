import * as React from "react";

import "./Hero.scss";
import heroImg from "../../Assets/Images/heroImg.png";
import { Context } from "../../Context/Context";
import { Btn, Slider } from "../../Data/data";
function Hero() {
  const { lan } = React.useContext(Context);
  return (
    <div className="hero">
      <div className="hero__container container">
        <div className="hero__container__left">
          {Slider?.map((e) => (
            <h4 key={e.id}>{e.natural}% natural</h4>
          ))}
          {Slider?.map((e) => (
            <h2 key={e.id}>{e[`title_${lan}`]}</h2>
          ))}
          {Btn?.map((e) => (
            <a
              href={e.href}
              className="hero__container__left__btn"
              variable="contained"
              key={e.id}
            >
              {e[`title_${lan}`]}
            </a>
          ))}
        </div>
        <div className="hero__container__right">
          <div
            id="carouselExampleDark"
            class="carousel carousel-dark slide"
            data-bs-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active" data-bs-interval="2000">
                <img src={heroImg} class="" alt="" />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={heroImg} class="" alt="" />
              </div>
              <div class="carousel-item" data-bs-interval="2000">
                <img src={heroImg} class="" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
