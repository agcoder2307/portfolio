import React from "react";
import photo from "./avatar.jpg";
import "./styles/image.css";
const Image = () => {
  return (
    <div className="image">
      <img src={photo} alt="portfolio" />
    </div>
  );
};

export default Image;
