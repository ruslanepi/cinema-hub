import React, { useState } from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const DetailSlider = () => {
  const { backdrops } = useSelector((state) => state.details.filmScreens)

  const [activeSlider, setActiveSlider] = useState(0)

  const slideHandler = (type) => {
    if (type === 'prev') {
      if (activeSlider === 0) {
        setActiveSlider(backdrops.length - 1)
      } else {
        setActiveSlider(activeSlider - 1)
      }
    }
    if (type === 'next') {
      if (activeSlider === backdrops.length - 1) {
        setActiveSlider(0)
      } else {
        setActiveSlider(activeSlider + 1)
      }
    }
  }

  return (
    <Slider>
      {backdrops.map((image, index) => 
          <div
            className={activeSlider === index ? 'active image1' : 'image1'}
            style={{
              background: `url(
                https://image.tmdb.org/t/p/w500${image.file_path}
              )`,
            }}
            id={index}
            key={image.file_path}
          ></div>
          )}
      <button className='prev-btn' onClick={() => slideHandler('prev')}>
        <span>«</span>
      </button>
      <button className='next-btn' onClick={() => slideHandler('next')}>
        <span>»</span>
      </button>
    </Slider>
  )
}

const Slider = styled.div`
  position: relative;
  width: 100%;
  height: 100%;

  @media (max-width: 1200px) {
    height: 400px;
    width: 100%;
  }

  @media (max-width: 767px) {
    height: 200px;
    width: 100%;
  }

  .image1 {
    height: 400px;
    position: absolute;
    width: 100%;
    background-size: cover !important;
    background-position: 50% !important;

    opacity: 0;
    transition: opacity 0.5s ease-out;
    &.active {
      z-index: 10;
      opacity: 1;
    }

    @media (max-width: 1200px) {
      height: 400px;
      width: 100%;
    }

    @media (max-width: 767px) {
      height: 200px;
      width: 100%;
    }
  }

  button {
    position: absolute;
    z-index: 11;
    top: calc(50% - 20px);
    width: 40px;
    height: 40px;

    border-radius: 50%;
    border: none;
    text-align: center;
    font-size: 26px;

    box-shadow: 0px 0px 10px 0px #a2a2a2;
    transition: all 0.2s ease;

    @media (max-width: 767px) {
      width: 32px;
      height: 32px;
      font-size: 22px;
    }
  }

  .prev-btn {
    left: -19px;

    span {
      position: absolute;
      top: -3px;
      left: 12px;
      @media (max-width: 767px) {
        top: -2px;
        left: 9px;
      }
    }
    &:hover {
      left: -23px;
      @media (max-width: 767px) {
        left: 5px;
      }
    }
    @media (max-width: 767px) {
      left: 5px;
    }
  }

  .next-btn {
    right: -19px;
    @media (max-width: 767px) {
      right: 5px;
    }

    span {
      position: absolute;
      top: -3px;
      left: 14px;
      @media (max-width: 767px) {
        top: -2px;
        left: 11px;
      }
    }
    &:hover {
      right: -23px;
      @media (max-width: 767px) {
        right: 5px;
      }
    }
  }
`

export default DetailSlider
