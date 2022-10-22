import React from "react";

const PortfolioCard = ({ image, title, description }) => {
  return (
    <div className="portfolio__card">
      <div className="portfolio__card-img">
        <img src={image} alt="food app" />
      </div>
      <div className="portfolio__footer">
        <p>{title}</p>
        <h3>{description}</h3>
      </div>
    </div>
  );
};

export default PortfolioCard;
