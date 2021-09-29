import React, { useState } from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

const DetailSlider = () => {
  const { backdrops } = useSelector((state) => state.details.filmScreens);

  const [activeSlider, setActiveSlider] = useState(0);

  const slideHandler = (type) => {
    if (type === "prev") {
      if (activeSlider === 0) {
        setActiveSlider(backdrops.length - 1);
      } else {
        setActiveSlider(activeSlider - 1);
      }
    }
    if (type === "next") {
      if (activeSlider === backdrops.length - 1) {
        setActiveSlider(0);
      } else {
        setActiveSlider(activeSlider + 1);
      }
    }
  };

  return (
    <Slider>
      <button className="prev-btn" onClick={() => slideHandler("prev")}>
        <span>«</span>
      </button>
      <button className="next-btn" onClick={() => slideHandler("next")}>
        <span>»</span>
      </button>
      {backdrops.map((image, index) => {
        return (
          <img
            className={activeSlider === index ? "active" : ""}
            id={index}
            key={image.file_path}
            src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
            alt="img"
          />
        );
      })}
    </Slider>
  );
};

const Slider = styled.div`
  position: relative;
  width: 100%;

  img {
    position: absolute;
    width: 100%;
    opacity: 0;
    transition: opacity 0.5s ease-out;
    &.active {
      z-index: 10;
      opacity: 1;
    }
  }

  button {
    position: absolute;
    z-index: 11;
    top: 120px;
    width: 40px;
    height: 40px;

    border-radius: 50%;
    border: none;
    text-align: center;
    font-size: 26px;

    box-shadow: 0px 0px 10px 0px #a2a2a2;
    transition: all 0.2s ease;
  }

  .prev-btn {
    left: -19px;

    span {
      position: absolute;
      top: -3px;
      left: 12px;
    }
    &:hover {
      left: -23px;
    }
  }

  .next-btn {
    right: -19px;

    span {
      position: absolute;
      top: -3px;
      left: 14px;
    }
    &:hover {
      right: -23px;
    }
  }
`;

export default DetailSlider;
