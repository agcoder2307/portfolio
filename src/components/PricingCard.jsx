import React from "react";
import { IoIosArrowForward } from "react-icons/io";
const PricingCard = ({ icon, title, price, musicOn, photoOn }) => {
  return (
    <div className="pricing__card">
      <div className="pricing__card-heading">
        <p>{icon}</p>
        <h3>{title}</h3>
        <h1>{price}</h1>
      </div>
      <div className="pricing__card-info">
        <p>Web Development</p>
        <p>Advertising</p>
        <p>Game Development</p>
        <p style={{ textDecoration: !musicOn ? "line-through" : "" }}>
          Music Writing
        </p>
        <p
          style={{ textDecoration: !musicOn ? "line-through" : "" }}
          className={photoOn ? "photo" : ""}
        >
          Photography
        </p>
      </div>
      <button className="main__contact-btn">
        <span className="hide">
          <li data="B">B</li>
          <li data="u">u</li>
          <li data="y">y</li>
        </span>
        <IoIosArrowForward className="span-icon" />
      </button>
    </div>
  );
};

export default PricingCard;
