import React from "react";
import PortfolioCard from "./PortfolioCard";
import "./styles/portfolio.css";
import foodApp from "./images/food-app.png";

const data = [
  {
    image: foodApp,
    title: "portfolio",
    description: "Food App",
  },
  {
    image: foodApp,
    title: "portfolio",
    description: "Restaurant App",
  },
  {
    image: foodApp,
    title: "portfolio",
    description: "AI App",
  },
  {
    image: foodApp,
    title: "portfolio",
    description: "Healthcare App",
  },
];

const Portfolio = () => {
  return (
    <div className="portfolio" id="portfolio">
      <div className="portfolio__title">
        <h1>Portfolio</h1>
        <p>LATEST WORKS</p>
      </div>
      <div className="portfolio__container">
        {data.map((item) => (
          <PortfolioCard
            image={item.image}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
