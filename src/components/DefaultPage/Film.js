import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import {
  addFilm,
  removeFilm,
  getDetails,
  toggleDetail,
} from '../../actions/filmsAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar } from '@fortawesome/free-solid-svg-icons'

const Film = (film) => {
  const { id, title, poster_path, vote_average, release_date } = film
  const dispatch = useDispatch()

  const [disabled, setDisabled] = useState(false)
  const [filledStar, setFilledStar] = useState(false)

  const { myLibrary } = useSelector((state) => state.library)
  const currentFilm = myLibrary.find((item) => item.id === id)

  let currentFilmFilled = {}
  if (currentFilm) {
    currentFilmFilled = currentFilm
  }

  useEffect(() => {
    checkFilmInLibrary()
  })

  const LibraryHandler = () => {
    if (checkFilmInLibrary()) {
      dispatch(removeFilm(id))
    } else {
      dispatch(addFilm({ ...film }))
    }
  }

  const checkFilmInLibrary = () => {
    const checker = myLibrary.filter((item) => item.id === id)
    if (checker.length > 0) {
      setFilledStar(true)
      return true
    } else {
      setFilledStar(false)
      return false
    }
  }

  const filmDetailHandler = () => {
    dispatch(getDetails(id))
    dispatch(toggleDetail())
  }

  return (
    <FilmWrapper>
      <FilmTopContent>
        <img
          onClick={filmDetailHandler}
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          className={currentFilmFilled.status === 'reviewed' ? 'watched' : ''}
        />
        {currentFilmFilled.voteRating ? (
          <div className='vote-rating'>{currentFilmFilled.voteRating}/10</div>
        ) : (
          ''
        )}
      </FilmTopContent>

      <ButtonBlock onClick={LibraryHandler}>
        <TitleButton
          className={filledStar ? ' title-button' : 'active title-button'}
        >
          Добавить в библиотеку
        </TitleButton>
        <TitleButton
          className={filledStar ? 'active title-button' : 'title-button'}
        >
          Убрать из библиотеки
        </TitleButton>
        <IconButton className={filledStar ? 'active' : ''}>
          <FontAwesomeIcon icon={faStar} />
        </IconButton>
      </ButtonBlock>

      <FilmBottomContent>
        <div onClick={filmDetailHandler} className='title'>
          {title}
        </div>
        <FilmParameters>
          <div>Оценка: {vote_average} / 10</div> <div>{release_date}</div>
        </FilmParameters>
      </FilmBottomContent>
    </FilmWrapper>
  )
}

const FilmWrapper = styled.article`
  position: relative;

  img {
    width: 100%;
    cursor: pointer;
    border-radius: 25px 25px 0px 0px;
  }
  img.watched {
    opacity: 0.7;
  }
`

const FilmTopContent = styled.article`
  position: relative;

  .vote-rating {
    position: absolute;
    bottom: 6px;
    left: 11px;
    color: #ffffff;
    font-size: 46px;
    z-index: 9;
    font-family: 'Russo One', sans-serif;
    letter-spacing: 1px;
    line-height: 39px;
  }
`

const ButtonBlock = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;

  cursor: pointer;

  &:hover .title-button.active {
    right: 50px;
    opacity: 1;
    visibility: visible;

    @media (max-width: 1200px) {
      right: 30px;
    }

    @media (max-width: 767px) {
      right: 45px;
    }
  }

  @media (max-width: 767px) {
    right: 15px;
    top: 15px;

    & .title-button.active {
      right: 40px;
      opacity: 1;
      visibility: visible;
    }
  }
`

const TitleButton = styled.div`
  transition: all ease 0.3s;
  visibility: hidden;
  opacity: 0;

  position: absolute;
  right: 30px;
  margin-right: 15px;
  padding: 7px 20px;

  font-size: 16px;

  border-radius: 20px;
  background: #fffffff0;
  @media (max-width: 1200px) {
    padding: 6px 14px;
    font-size: 16px;
  }

  @media (max-width: 767px) {
    padding: 6px 16px;
    font-size: 18px;
  }
`

const IconButton = styled.button`
  height: 50px;
  width: 50px;
  background: #fff;
  color: #ffbc00;
  border: none;
  border-radius: 50%;
  box-shadow: inset 0px 0px 3px 1px #ccc;
  cursor: pointer;
  transition: all ease 0.3s;
  font-size: 16px;

  &:hover {
    background: #f3f3f3;
    color: #ffbc00;
  }

  &.active {
    background: #c7199200;
    color: #ffc626;
    box-shadow: none;
    font-size: 32px;

    @media (max-width: 1200px) {
      font-size: 28px;
    }

    @media (max-width: 767px) {
      font-size: 28px;
    }
  }

  @media (max-width: 1200px) {
    height: 40px;
    width: 40px;
    font-size: 16px;
  }

  @media (max-width: 767px) {
    height: 44px;
    width: 44px;
    font-size: 18px;
  }
`

const FilmBottomContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  min-height: 120px;

  border-radius: 0px 0px 25px 25px;
  background: #f1f1f1;
  padding: 15px;

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

    background: #ccc;
    color: #fff;
    margin-right: 5px;

    &.active {
      background: #c54da0;
    }

    &.clear-film-btn {
      background: #c54da0;
    }

    @media (max-width: 767px) {
      padding: 5px 10px;
      font-size: 14px;
      color: #585656;
    }
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
