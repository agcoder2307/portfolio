import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ExpCard from "./ExpCard";
import "./styles/experience.css";

const data = [
  {
    year: "2016-2018",
    title: "Red\nDrifting",
  },
  {
    year: "2016-2018",
    title: "World\nEconomy",
  },
  {
    year: "2012-2014",
    title: "Art Direction\nFacebook",
  },
  {
    year: "2016-2018",
    title: "The Turin\nOlympics",
  },
];

const Experience = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 450;
    } else {
      scrollRef.current.scrollLeft += 450;
    }
  };
  return (
    <div className="experience" id="resume">
      <div className="experience__wrapper">
        <div className="experience__title">
          <h1>Experience</h1>
          <p>WORKING WITH</p>
        </div>
        <div className="arrows">
          <span onClick={() => scroll("left")}>
            <IoIosArrowBack style={{ fontSize: "18px" }} />
          </span>
          <span onClick={() => scroll("right")}>
            <IoIosArrowForward style={{ fontSize: "18px" }} />
          </span>
        </div>
      </div>
      <div className="experience__container" ref={scrollRef}>
        <div className="experience__mini_wrapper">
          {data.map((item) => (
            <ExpCard year={item.year} title={item.title} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
