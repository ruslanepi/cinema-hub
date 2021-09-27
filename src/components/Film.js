import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  addFilm,
  removeFilm,
  getDetails,
  toggleDetail,
} from '../actions/filmsAction'

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

  const removeFilmFromLibrary = () => {
    dispatch(removeFilm(id))
    checkFilmInLibrary()
  }

  const filmDetailHandler = () => {
    dispatch(getDetails(id))
    dispatch(toggleDetail())
  }

  return (
    <FilmWrapper>
      <img
        onClick={filmDetailHandler}
        src={`https://image.tmdb.org/t/p/w500${poster_path}`}
        alt={title}
      />

      <FilmBottomContent>
        <div onClick={filmDetailHandler} className='title'>
          {title}
        </div>
        <FilmParameters>
          <div>Оценка: {vote_average} / 10</div> <div>{release_date}</div>
        </FilmParameters>

        <div>
          <button
            disabled={disabled ? 'disabled' : ''}
            onClick={addToLibraryHandler}
          >
            В избранное
          </button>

          {disabled && <button onClick={removeFilmFromLibrary}>-</button>}
        </div>
      </FilmBottomContent>
    </FilmWrapper>
  )
}

const FilmWrapper = styled.article`
  padding: 15px;

  img {
    width: 100%;
    cursor: pointer;
  }
`

const FilmBottomContent = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: space-between;

  background: #fff;
  padding: 15px;
  min-height: 180px;

  .title {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 10px;
    cursor: pointer;
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
