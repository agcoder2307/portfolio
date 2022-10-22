import React, { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import ExpCard from "./ExpCard";
import "./styles/experience.css";

const data = [
  {
    year: "2011-2012",
    title: "Art University New York",
  },
  {
    year: "2010-2011",
    title: "Programming Course Paris",
  },
  {
    year: "2009-2010",
    title: "Web Design Course London",
  },
  {
    year: "2008-2009",
    title: "Art Course London",
  },
];

const Education = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 450;
    } else {
      scrollRef.current.scrollLeft += 450;
    }
  };
  return (
    <div className="experience">
      <div className="experience__wrapper">
        <div className="experience__title">
          <h1>Education</h1>
          <p>Studied at</p>
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

export default Education;
