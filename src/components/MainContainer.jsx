import React from "react";
import { GrFacebookOption } from "react-icons/gr";
import { GrInstagram } from "react-icons/gr";
import { FaTelegramPlane } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";
import About from "./About";
import Services from "./Services";
import "./styles/main.css";
import Pricing from "./Pricing";
import Experience from "./Experience";
import Education from "./Education";
import Coding from "./Coding";
import Portfolio from "./Portfolio";
import Contact from "./Contact";

const MainContainer = () => {
  return (
    <div className="main" id="home">
      <div className="main__container">
        <div className="main__container-name">
          <h1>
            Your <br /> Name
          </h1>
        </div>
        <div className="main__container-heading">
          <div className="job-title">
            <h3>WEB PROGRAMMER</h3>
          </div>
          <span className="main__container-par">
            <p>
              Hello! I am Web Developer from Uzbekistan, Tashkent. I have rich
              experience in web site design and building, also I am good at
              math. I love to talk with you about our unique.
            </p>
          </span>
          <button className="main__contact-btn">
            <a
              href="#contact"
              style={{ textDecoration: "none", color: "#fff" }}
            >
              <span className="hide">
                <li data="C">C</li>
                <li data="o">o</li>
                <li data="n">n</li>
                <li data="t">t</li>
                <li data="a">a</li>
                <li data="c">c</li>
                <li data="t" style={{ marginRight: "0.35rem" }}>
                  t
                </li>
                <li data="M">M</li>
                <li data="e">e</li>
              </span>
            </a>
            <IoIosArrowForward className="span-icon" />
          </button>
        </div>
        <About />
        <Services />
        <Pricing />
        <Experience />
        <Education />
        <Coding />
        <Portfolio />
        <Contact />
      </div>
      <div className="sidenav">
        <span className="sidenav-icon">
          <GrFacebookOption
            style={{
              fontSize: "26px",
              margin: "1rem 0",
            }}
          />
        </span>
        <span className="sidenav-icon">
          <GrInstagram
            style={{
              fontSize: "18px",
              margin: "1.12rem 0",
            }}
          />
        </span>
        <span className="sidenav-icon">
          <FaTelegramPlane
            style={{
              fontSize: "18px",
              margin: "1.12rem 0",
            }}
          />
        </span>
      </div>
    </div>
  );
};

export default MainContainer;
