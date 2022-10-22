import React from "react";
import ServiceCard from "./ServiceCard";
import "./styles/services.css";
import { AiFillBank } from "react-icons/ai";
import { AiOutlineBarChart } from "react-icons/ai";
import { FaCode } from "react-icons/fa";
import { BsMusicNoteBeamed } from "react-icons/bs";

const data = [
  {
    icon: <AiFillBank />,
    title: "Economic Science",
    description:
      "Economics is a social science concerned with the production, consumption of goods and services.",
  },
  {
    icon: <AiOutlineBarChart />,
    title: "Marketing & Advertising",
    description:
      "Economics is a social science concerned with the production, consumption of goods and services.",
  },
  {
    icon: <FaCode />,
    title: "Web Development",
    description:
      "Economics is a social science concerned with the production, consumption of goods and services.",
  },
  {
    icon: <BsMusicNoteBeamed />,
    title: "Music Writing",
    description:
      "Economics is a social science concerned with the production, consumption of goods and services.",
  },
];

const Services = () => {
  return (
    <div className="services">
      <div className="services__title">
        <h1>Services</h1>
        <p>what i do</p>
      </div>
      <div className="services__container">
        {data.map((item) => (
          <ServiceCard
            icon={item.icon}
            title={item.title}
            description={item.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Services;
