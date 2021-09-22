import React from 'react'
import styled from 'styled-components'
import { useSelector } from 'react-redux'

const DetailSlider = () => {
  const { backdrops } = useSelector((state) => state.details.filmScreens)

  return (
    <Slider>
      {backdrops.map((image) => {
        return (
          <img
            key={image.file_path}
            src={`https://image.tmdb.org/t/p/w500${image.file_path}`}
          />
        )
      })}
    </Slider>
  )
}

const Slider = styled.div`
  position: relative;

  img {
    position: absolute;
    width: 100%;
    &.active {
      z-index: 10;
    }
  }
`

export default DetailSlider
