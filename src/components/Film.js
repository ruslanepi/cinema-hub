import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { addFilm, loadFilms } from '../actions/filmsAction'

const Film = (film) => {
  const { id, title, poster_path, vote_average, release_date } = film
  const dispatch = useDispatch()

  const [disabled, setDisabled] = useState(false)

  const { myLibrary } = useSelector((state) => state.library)

  useEffect(() => {
    checkFilmInLibrary()
  })

  const checkFilmInLibrary = () => {
    const checker = myLibrary.filter((item) => item.id === id)
    if (checker.length > 0) {
      setDisabled(true)
    } else {
      setDisabled(false)
    }
  }

  const addToLibraryHandler = () => {
    dispatch(addFilm({ ...film }))
    checkFilmInLibrary()
  }

  return (
    <FilmWrapper>
      <img src={`https://image.tmdb.org/t/p/w500${poster_path}`} alt={title} />

      <FilmBottomContent>
        <div className='title'>{title}</div>
        <FilmParameters>
          <div>Оценка: {vote_average} / 10</div> <div>{release_date}</div>
        </FilmParameters>

        <button
          disabled={disabled ? 'disabled' : ''}
          onClick={addToLibraryHandler}
        >
          Добавить в библиотеку
        </button>
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

  button {
    border: none;
    border-radius: 4px;
    padding: 5px 15px;
  }
`

const FilmParameters = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
`

export default Film
