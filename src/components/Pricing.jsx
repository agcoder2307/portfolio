import React, { useRef } from "react";
import PricingCard from "./PricingCard";
import "./styles/pricing.css";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { AiFillStar } from "react-icons/ai";
import { FaRocket } from "react-icons/fa";
import { FaSpaceShuttle } from "react-icons/fa";

const data = [
  {
    icon: <AiFillStar />,
    title: "Basic",
    price: "39",
    isMusic: false,
  },
  {
    icon: <FaRocket />,
    title: "Premium",
    price: "59",
    isMusic: true,
  },
  {
    icon: <FaSpaceShuttle />,
    title: "Ultimate",
    price: "72",
    isMusic: true,
  },
];

const Pricing = () => {
  const scrollRef = useRef(null);
  const scroll = (direction) => {
    if (direction === "left") {
      scrollRef.current.scrollLeft -= 300;
    } else {
      scrollRef.current.scrollLeft += 300;
    }
  };
  return (
    <div className="pricing">
      <div className="pricing__wrapper">
        <div className="pricing__title">
          <h1>Pricing</h1>
          <p>My plans</p>
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
      <div className="pricing__container" ref={scrollRef}>
        {data.map((item) => (
          <PricingCard
            icon={item.icon}
            price={item.price}
            title={item.title}
            musicOn={item.isMusic}
            photoOn={item.isMusic}
          />
        ))}
      </div>
    </div>
  );
};

export default Pricing;
