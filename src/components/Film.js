import React from 'react'
import styled from 'styled-components'

const Film = ({ title, poster_path, vote_average, release_date }) => {
  return (
    <FilmWrapper>
      <img
        src={`  https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />

      <FilmBottomContent>
        <div className='title'>{title}</div>
        <FilmParameters>
          <div>Оценка: {vote_average} / 10</div> <div>{release_date}</div>
        </FilmParameters>
      </FilmBottomContent>
    </FilmWrapper>
  )
}

const FilmWrapper = styled.article`
  max-width: 50%;
  padding: 15px;

  img {
    width: 100%;
  }
`

const FilmBottomContent = styled.div`
  background: #fff;
  padding: 15px;

  .title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
  }
`

const FilmParameters = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
`

export default Film
