import React from "react";

const ExpCard = ({ year, title }) => {
  return (
    <div className="experience__card">
      <div className="experience__card-heading">
        <span>{year}</span>
        <h3>{title}</h3>
      </div>
      <p className="experience__card-info">
        Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed
        fringilla mauris sit amet nibh. Donec sodales sagittis magna.
      </p>
    </div>
  );
};

export default ExpCard;
