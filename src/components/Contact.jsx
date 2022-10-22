import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import "./styles/contact.css";

const Contact = () => {
  const submitHandler = () => {};
  return (
    <div className="contact" id="contact">
      <div className="contact__title">
        <h1>Contact</h1>
        <p>LET'S TALK</p>
      </div>
      <div className="contact__wrapper">
        <form onSubmit={submitHandler} className="contact__wrapper-form">
          <div className="full-name">
            <input placeholder="ej:Abbos Gaibullaev" type="text" />
          </div>
          <div className="email">
            <input placeholder="example@domain" type="email" />
          </div>
          <div className="message">
            <textarea placeholder="To text"></textarea>
          </div>
          <button className="main__contact-btn" type="submit">
            <span className="hide">
              <li data="S">S</li>
              <li data="e">e</li>
              <li data="n">n</li>
              <li data="d">d</li>
              <li data="M" style={{ marginLeft: "0.5rem" }}>
                M
              </li>
              <li data="e">e</li>
              <li data="s">s</li>
              <li data="s">s</li>
              <li data="a">a</li>
              <li data="g">g</li>
              <li data="e">e</li>
            </span>
            <IoIosArrowForward className="span-icon" />
          </button>
        </form>
        <div className="contact__wrapper-info">
          <div className="contact__wrapper-info-heading">
            <h3>Your Name</h3>
            <p>Web Programmer</p>
          </div>
          <div className="about__info-wrapper">
            <ul className="about__info-wrapper_upper">
              <li>Age:</li>
              <li>Freelance:</li>
              <li>Phone:</li>
              <li>RESIDENCE:</li>
              <li>ADDRESS:</li>
              <li>E-MAIL:</li>
            </ul>
            <ul>
              <li>24</li>
              <li>Available</li>
              <li>+998999999999</li>
              <li>UZB</li>
              <li>Tashkent</li>
              <li>abbosxd@mail.ru</li>
            </ul>
          </div>
          <h2 className="signature">Your Name</h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
