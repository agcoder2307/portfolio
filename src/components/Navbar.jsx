import React from "react";
import { useState } from "react";
import { AiOutlineDownload } from "react-icons/ai";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import "./styles/navbar.css";

const Navbar = () => {
  const [isGrey, setIsGrey] = useState(false);
  const [toggleMenu, setToggleMenu] = useState(false);

  const scrollValue = document.documentElement.scrollTop;
  const changeValueScroll = () => {
    if (scrollValue > 90) {
      setIsGrey(true);
    } else {
      setIsGrey(false);
    }
  };

  window.addEventListener("scroll", changeValueScroll);

  return (
    <div className={`navbar ${isGrey && "grey"}`}>
      <div className="navbar__title">
        <h3>Your Name</h3>
      </div>
      <ul className="navbar__links">
        <a href="#home" style={{ textDecoration: "none", color: "#fff" }}>
          <span className="hide">
            <li data="h">h</li>
            <li data="o">o</li>
            <li data="m">m</li>
            <li data="e">e</li>
          </span>
        </a>
        <a href="#about" style={{ textDecoration: "none", color: "#fff" }}>
          <span className="hide">
            <li data="a">a</li>
            <li data="b">b</li>
            <li data="o">o</li>
            <li data="u">u</li>
            <li data="t">t</li>
          </span>
        </a>
        <a href="#resume" style={{ textDecoration: "none", color: "#fff" }}>
          <span className="hide">
            <li data="r">r</li>
            <li data="e">e</li>
            <li data="s">s</li>
            <li data="u">u</li>
            <li data="m">m</li>
            <li data="e">e</li>
          </span>
        </a>
        <a href="#portfolio" style={{ textDecoration: "none", color: "#fff" }}>
          <span className="hide portfolio_btn">
            <li data="p">p</li>
            <li data="o">o</li>
            <li data="r">r</li>
            <li data="t">t</li>
            <li data="f">f</li>
            <li data="o">o</li>
            <li data="l">l</li>
            <li data="i">i</li>
            <li data="o">o</li>
          </span>
        </a>
        <a href="#contact" style={{ textDecoration: "none", color: "#fff" }}>
          <span className="hide">
            <li data="c">c</li>
            <li data="o">o</li>
            <li data="n">n</li>
            <li data="t">t</li>
            <li data="a">a</li>
            <li data="c">c</li>
            <li data="t">t</li>
            <li data="s">s</li>
          </span>
        </a>
      </ul>
      <button className="navbar__button">
        <span className="hide">
          <li data="download cv">download cv</li>
        </span>
        <AiOutlineDownload
          style={{ fontSize: "1.2rem", marginLeft: "0.5rem" }}
        />
      </button>

      <div className="navbar-mb">
        <span className="toggle" onClick={() => setToggleMenu(true)}>
          <GiHamburgerMenu
            style={{
              fontSize: "20px",
            }}
          />
        </span>

        {toggleMenu && (
          <div className="navbar__mobile">
            <div className="close" onClick={() => setToggleMenu(false)}>
              <IoMdClose
                style={{
                  fontSize: "20px",
                }}
              />
            </div>
            <ul className="navbar__links-mobile">
              <a href="#home" style={{ textDecoration: "none", color: "#fff" }}>
                <span className="hide">
                  <li data="h">h</li>
                  <li data="o">o</li>
                  <li data="m">m</li>
                  <li data="e">e</li>
                </span>
              </a>
              <a
                href="#about"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <span className="hide">
                  <li data="a">a</li>
                  <li data="b">b</li>
                  <li data="o">o</li>
                  <li data="u">u</li>
                  <li data="t">t</li>
                </span>
              </a>
              <a
                href="#resume"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <span className="hide">
                  <li data="r">r</li>
                  <li data="e">e</li>
                  <li data="s">s</li>
                  <li data="u">u</li>
                  <li data="m">m</li>
                  <li data="e">e</li>
                </span>
              </a>
              <a
                href="#portfolio"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <span className="hide portfolio_btn">
                  <li data="p">p</li>
                  <li data="o">o</li>
                  <li data="r">r</li>
                  <li data="t">t</li>
                  <li data="f">f</li>
                  <li data="o">o</li>
                  <li data="l">l</li>
                  <li data="i">i</li>
                  <li data="o">o</li>
                </span>
              </a>
              <a
                href="#contact"
                style={{ textDecoration: "none", color: "#fff" }}
              >
                <span className="hide">
                  <li data="c">c</li>
                  <li data="o">o</li>
                  <li data="n">n</li>
                  <li data="t">t</li>
                  <li data="a">a</li>
                  <li data="c">c</li>
                  <li data="t">t</li>
                  <li data="s">s</li>
                </span>
              </a>
              <button className="navbar__button-mobile">
                <span className="hide">
                  <li data="download cv">download cv</li>
                </span>
                <AiOutlineDownload
                  style={{ fontSize: "1.2rem", marginLeft: "0.5rem" }}
                />
              </button>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
