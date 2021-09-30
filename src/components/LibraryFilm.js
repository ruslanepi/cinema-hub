import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeFilm } from "../actions/filmsAction";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import {
  addFilmToWishList,
  changeStatusWatched,
  changeStatusWant
} from "../actions/filmsAction";

import { NavLink } from "react-router-dom";

const LibraryFilm = (film) => {
  const { id, title, poster_path, vote_average, release_date } = film;
  const { wishList } = useSelector((state) => state.wishlist);
  const { myLibrary } = useSelector((state) => state.library);


const currentFilmStatus = myLibrary.find(item => item.id === id)


  const dispatch = useDispatch();

  const removeFilmFromLibrary = (e) => {
   
    dispatch(removeFilm(id));
  };

  const addFilmToWishListHandler = (e) => {
    
    if (checkFilmInLibrary()) {
      dispatch(addFilmToWishList(film));
    }
  };

  const checkFilmInLibrary = () => {
    const checker = wishList.filter((item) => item.id === id);
    if (checker.length > 0) {
      return false;
    } else {
      return true;
    }
  };

  const changeStatusWatchedHandler = () => {
    dispatch(changeStatusWatched(id));
  };

  const changeStatusWantHandler = () => {
    dispatch(changeStatusWant(id));
  };




  return (
    // <NavLink to={`/profile/${id}`}>
    <FilmWrapper>
      <FilmTopContent>
        <ButtonBlock onClick={removeFilmFromLibrary}>
          <TitleButton className="title-button">
            Убрать из избранного
          </TitleButton>
          <IconButton>
            <FontAwesomeIcon icon={faTimes} />
          </IconButton>
        </ButtonBlock>

        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />

        <div className="toggler">
          <div className={`${currentFilmStatus.status === 'want' ? 'button selected': 'button'}` } onClick={(e) => changeStatusWantHandler(e)}>
            Хочу посмотреть
          </div>
          <div className={`${currentFilmStatus.status === 'watched' ? 'button selected': 'button'}`} onClick={(e) => changeStatusWatchedHandler(e)}>
            Посмотрел
          </div>
          <div className={`${currentFilmStatus.status === 'watched' ? 'button ': 'button disable'}`}>Оценить</div>
        </div>
      </FilmTopContent>

      <FilmBottomContent>
        <div className="title">{title}</div>
        <FilmParameters>
          <div>Оценка: {vote_average} / 10</div> <div>{release_date}</div>
        </FilmParameters>
      </FilmBottomContent>
    </FilmWrapper>
    // </NavLink>
  );
};

const FilmWrapper = styled.article`
  img {
    width: 100%;
  }
`;

const FilmTopContent = styled.div`
  position: relative;

  .toggler {
    position: absolute;
    bottom: 20px;
    right: -2px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;
    width: 100%;

    .button {
      width: fit-content;
      padding: 5px 25px;
      margin-bottom: 6px;

      background: #c54da0;
      border-radius: 20px 1px 1px 20px;
      box-shadow: -2px 5px 2px -2px #3c3c3c70;

      color: #fff;
      font-size: 13px;

      letter-spacing: 0.5px;

      cursor:pointer;
      transition: padding-right ease 0.3s;

      &:hover {
        padding-right: 35px;
      }
      &.disable {
        pointer-events: none;
        background: #ccc;
        visibility:hidden;
      }

      &.selected {
        pointer-events: none;
        background: green;
      }
    }
  }
`;

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
`;

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
`;

const IconButton = styled.button`
  height: 35px;
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
`;

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
`;

const FilmParameters = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 14px;
  color: #555;
  margin-bottom: 15px;
`;

export default LibraryFilm;
