import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { removeFilm } from '../actions/filmsAction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTimes } from '@fortawesome/free-solid-svg-icons'

import { NavLink } from 'react-router-dom'

const ReviewedFilm = (film) => {
  const { id, title, poster_path, vote_average, release_date } = film
  const { myLibrary } = useSelector((state) => state.library)
  const currentFilm = myLibrary.find((item) => item.id === id)

  const dispatch = useDispatch()

  return (
    <FilmWrapper>
      <FilmLeftSide>
        <FilmTopContent>
          {currentFilm.voteRating ? (
            <div className='vote-rating'>{currentFilm.voteRating}/10</div>
          ) : (
            ''
          )}
          <NavLink to={`/profile/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              className={currentFilm.status === 'reviewed' ? 'watched' : ''}
            />
          </NavLink>
        </FilmTopContent>

        <FilmBottomContent>
          <div className='title'>{title}</div>
          <FilmParameters>
            <div>Оценка: {vote_average} / 10</div> <div>{release_date}</div>
          </FilmParameters>
        </FilmBottomContent>
      </FilmLeftSide>
      <FilmRightSide>
        <span>Содержание отзыва:</span>
        <p> {currentFilm.review}</p>
      </FilmRightSide>
    </FilmWrapper>
  )
}

const FilmWrapper = styled.article`
  display: flex;
  margin-bottom: 25px;

  img {
    width: 100%;
  }
`

const FilmLeftSide = styled.div`
  width: 40%;
`
const FilmRightSide = styled.div`
  padding: 25px;
  width: 60%;

  background-color: #f1f1f1;
`

const FilmTopContent = styled.div`
  position: relative;
  img.watched {
    opacity: 0.8;
  }
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
  .button {
    display: flex;
    align-items: center;
    width: 170px;
    padding: 8px 20px;
    margin-bottom: 3px;

    background: #6e979b;
    border-radius: 5px 1px 1px 5px;
    opacity: 1;
    /* box-shadow: -2px 5px 2px -2px #3c3c3c70; */

    color: #fff;
    font-size: 13px;

    letter-spacing: 0.5px;

    cursor: pointer;
    transition: all ease 0.3s;

    .icon {
      margin-right: 10px;
      font-size: 11px;
    }

    &:hover {
      width: 175px;
    }
    &.disable {
      pointer-events: none;
      visibility: hidden;
      opacity: 0;
    }

    &.selected {
      width: 180px;
      pointer-events: none;
      background: #fafad8;
      color: #111;
    }
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

  &:hover .title-button {
    right: 50px;
    opacity: 1;
    visibility: visible;
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

  font-size: 14px;
  color: #111;

  border-radius: 20px;
  background: #fffffff0;
`

const IconButton = styled.button`
  height: 36px;
  width: 37px;
  background: #fff;
  border: none;
  border-radius: 50%;

  font-size: 16px;
  line-height: 36px;
  color: #e40913;

  box-shadow: inset 0px 0px 3px 1px #ccc;
  cursor: pointer;
  transition: all ease 0.3s;

  &:hover {
    background: #f3f3f3;
    color: red;
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

export default ReviewedFilm
