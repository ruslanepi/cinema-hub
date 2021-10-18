import React from "react";
import styled from "styled-components";
import { useSelector } from "react-redux";

import { NavLink } from "react-router-dom";

const ReviewedFilm = (film) => {
  const { id, title, poster_path, vote_average, release_date } = film;
  const { myLibrary } = useSelector((state) => state.library);
  const currentFilm = myLibrary.find((item) => item.id === id);

  return (
    <FilmWrapper>
      <FilmLeftSide>
        <FilmTopContent>
          {currentFilm.voteRating ? (
            <div className="vote-rating">{currentFilm.voteRating}/10</div>
          ) : (
            ""
          )}
          <NavLink to={`/profile/${id}`}>
            <img
              src={`https://image.tmdb.org/t/p/w500${poster_path}`}
              alt={title}
              className={currentFilm.status === "reviewed" ? "watched" : ""}
            />
          </NavLink>
        </FilmTopContent>

        <FilmBottomContent>
          <div className="title">{title}</div>
          <FilmParameters>
            <div>Оценка: {vote_average} / 10</div> <div>{release_date}</div>
          </FilmParameters>
        </FilmBottomContent>
      </FilmLeftSide>
      <FilmRightSide>
        <span>Содержание отзыва:</span>
        <p> {currentFilm.review}</p>
        <NavLink to={`/profile/edit-review/${id}`}>
          Изменить отзыв и оценку
        </NavLink>
      </FilmRightSide>
    </FilmWrapper>
  );
};

const FilmWrapper = styled.article`
  display: flex;
  margin-bottom: 25px;
  border-radius: 12px;
  overflow: hidden;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
  img {
    width: 100%;
  }
`;

const FilmLeftSide = styled.div`
  width: 40%;

  @media (max-width: 768px) {
    width: 100%;
  }
`;
const FilmRightSide = styled.div`
  padding: 25px;
  width: 60%;

  background-color: #f1f1f1;

  @media (max-width: 768px) {
    width: 100%;
  }
`;

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
    font-family: "Russo One", sans-serif;
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

export default ReviewedFilm;
