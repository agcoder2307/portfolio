import React from "react";

const CodingCard = ({ percent, description, title }) => {
  const prc = 360 / 100;
  return (
    <div className="coding__card">
      <div
        className="coding__card-circle"
        style={{
          background: `conic-gradient(var(--color-main) ${
            prc * percent
          }deg, #373b40 0deg)`,
        }}
      >
        <span className="progress_value">{percent}%</span>
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default CodingCard;
