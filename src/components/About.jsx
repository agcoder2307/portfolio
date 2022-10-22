import React from "react";
import "./styles/about.css";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="about__title">
        <h1>About Me</h1>
        <p>My story</p>
      </div>
      <p className="about__bigger-p">
        Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus
        feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
        lacus. Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed
        cursus feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor
        sagittis lacus.
      </p>
      <p className="about__smaller-p">
        Pellentesque posuere. Praesent turpis. Aenean posuere, tortor sed cursus
        feugiat, nunc augue blandit nunc, eu sollicitudin urna dolor sagittis
        lacus. Donec elit libero, sodales nec, volutpat a, suscipit non, turpis.
      </p>
      <div className="about__info">
        <div className="about__info-wrapper">
          <ul className="about__info-wrapper_upper">
            <li>Age:</li>
            <li>Freelance:</li>
            <li>Phone:</li>
          </ul>
          <ul>
            <li>24</li>
            <li>Available</li>
            <li>+998999999999</li>
          </ul>
        </div>
        <div className="about__info-wrapper">
          <ul className="about__info-wrapper_upper">
            <li>RESIDENCE:</li>
            <li>ADDRESS:</li>
            <li>E-MAIL:</li>
          </ul>
          <ul>
            <li>UZB</li>
            <li>Tashkent</li>
            <li>abbosxd@mail.ru</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
