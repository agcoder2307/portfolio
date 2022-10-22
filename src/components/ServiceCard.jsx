import React from "react";
import { AiFillBank } from "react-icons/ai";
const ServiceCard = ({ icon, title, description }) => {
  return (
    <div className="service_card">
      <div className="service_card-heading">
        <span className="service_icon">{icon}</span>
        <h3>{title}</h3>
      </div>
      <p>{description}</p>
    </div>
  );
};

export default ServiceCard;
