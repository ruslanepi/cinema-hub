import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { removeFilm } from "../actions/filmsAction";

import { NavLink } from "react-router-dom";

const LibraryFilm = (film) => {
  const { id, title, poster_path, vote_average, release_date } = film;
  const dispatch = useDispatch();

  const removeFilmFromLibrary = (e) => {
    e.preventDefault();
    dispatch(removeFilm(id));
  };

  return (
    <NavLink to={`/profile/${id}`}>
      <FilmWrapper>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
        />

        <FilmBottomContent>
          <div className="title">{title}</div>
          <FilmParameters>
            <div>Оценка: {vote_average} / 10</div> <div>{release_date}</div>
          </FilmParameters>

          <button onClick={removeFilmFromLibrary}>Удалить из библиотеки</button>
        </FilmBottomContent>
      </FilmWrapper>
    </NavLink>
  );
};

const FilmWrapper = styled.article`
  img {
    width: 100%;
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
