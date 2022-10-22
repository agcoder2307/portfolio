import React from "react";
import CodingCard from "./CodingCard";
import "./styles/coding.css";

const data = [
  {
    percent: 90,
    title: "WordPress",
    p: "Etiam sit amet orci eget eros faucibus tincidunt.",
  },
  {
    percent: 75,
    title: "PHP,MYSQL",
    p: "Etiam sit amet orci eget eros faucibus tincidunt.",
  },
  {
    percent: 85,
    title: "JavaScript",
    p: "Etiam sit amet orci eget eros faucibus tincidunt.",
  },
  {
    percent: 80,
    title: "Angular",
    p: "Etiam sit amet orci eget eros faucibus tincidunt.",
  },
  {
    percent: 95,
    title: "HTML,CSS",
    p: "Etiam sit amet orci eget eros faucibus tincidunt.",
  },
  {
    percent: 90,
    title: "Python",
    p: "Etiam sit amet orci eget eros faucibus tincidunt.",
  },
];

const Coding = () => {
  return (
    <div className="coding">
      <div className="coding__title">
        <h1>Coding Skills</h1>
        <p>developing on</p>
      </div>
      <div className="coding__wrapper">
        {data.map((item) => (
          <CodingCard
            percent={item.percent}
            title={item.title}
            description={item.p}
          />
        ))}
      </div>
    </div>
  );
};

export default Coding;
