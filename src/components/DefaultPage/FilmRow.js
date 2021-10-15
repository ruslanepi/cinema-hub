import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import {
  addFilm,
  removeFilm,
  getDetails,
  toggleDetail,
  setFilmCredits,
} from "../../actions/filmsAction";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const FilmRow = (film) => {
  const { id, title, poster_path, overview, release_date, genre_ids } = film;
  const dispatch = useDispatch();

  const [filledStar, setFilledStar] = useState(false);

  const { myLibrary } = useSelector((state) => state.library);
  const currentFilm = myLibrary.find((item) => item.id === id);

  let currentFilmFilled = {};
  if (currentFilm) {
    currentFilmFilled = currentFilm;
  }

  const releaseDay = release_date.split("-")[2];
  const releaseDate = release_date.split("-").slice(0, 2).reverse().join(".");

  useEffect(() => {
    checkFilmInLibrary();
  });

  // useEffect(() => {
  //   dispatch(setFilmCredits(id));
  // }, []);

  const LibraryHandler = () => {
    if (checkFilmInLibrary()) {
      dispatch(removeFilm(id));
    } else {
      dispatch(addFilm({ ...film }));
    }
  };

  const checkFilmInLibrary = () => {
    const checker = myLibrary.filter((item) => item.id === id);
    if (checker.length > 0) {
      setFilledStar(true);
      return true;
    } else {
      setFilledStar(false);
      return false;
    }
  };

  const filmDetailHandler = () => {
    dispatch(getDetails(id));
    dispatch(toggleDetail());
  };

  const newArray = [];
  genre_ids.forEach((element) => {
    switch (element) {
      case 28:
        newArray.push("Экшен");
        break;
      case 12:
        newArray.push("Приключения");
        break;
      case 16:
        newArray.push("Мультфильм");
        break;
      case 36:
        newArray.push("Комедия");
        break;
      case 80:
        newArray.push("Криминал");
        break;
      case 99:
        newArray.push("Документальный");
        break;
      case 18:
        newArray.push("Драма");
        break;
      case 14:
        newArray.push("Фэнтези");
        break;
      case 36:
        newArray.push("Исторический");
        break;
      case 27:
        newArray.push("Ужасы");
        break;
      case 10402:
        newArray.push("Мюзикл");
        break;
      case 9648:
        newArray.push("Мистика");
        break;
      case 10749:
        newArray.push("Мелодрама");
        break;
      case 878:
        newArray.push("Научный");
        break;
      case 10770:
        newArray.push("TV Show");
        break;
      case 53:
        newArray.push("Триллер");
        break;
      case 10752:
        newArray.push("Военный");
        break;
      case 37:
        newArray.push("Вестерн");
        break;
      default:
        return [];
    }
  });

  return (
    <FilmWrapper>
      <FilmTopContent>
        <img
          onClick={filmDetailHandler}
          src={`https://image.tmdb.org/t/p/w500${
            poster_path
              ? poster_path
              : "https://image.tmdb.org/t/p/w500/b6MiDuJY694YWHMc9iaEc6nY0Qs.jpg"
          }`}
          alt={title}
          className={currentFilmFilled.status === "reviewed" ? "watched" : ""}
        />
        {currentFilmFilled.voteRating ? (
          <div className="vote-rating">{currentFilmFilled.voteRating}/10</div>
        ) : (
          ""
        )}
      </FilmTopContent>

      {currentFilmFilled.status === "reviewed" ? (
        ""
      ) : (
        <ButtonBlock onClick={LibraryHandler}>
          <TitleButton
            className={filledStar ? " title-button" : "active title-button"}
          >
            Добавить в библиотеку
          </TitleButton>
          <TitleButton
            className={filledStar ? "active title-button" : "title-button"}
          >
            Убрать из библиотеки
          </TitleButton>
          <IconButton className={filledStar ? "active" : ""}>
            <FontAwesomeIcon icon={faStar} />
          </IconButton>
        </ButtonBlock>
      )}

      <FilmBottomContent>
        <FilmParameters>
          <div onClick={filmDetailHandler} className="title">
            {title}
          </div>
          <div className="release__wrapper">
            <span className="release__day">{releaseDay}</span>
            <span className="release__date"> {releaseDate}</span>
          </div>
        </FilmParameters>
        <div>
          {newArray.slice(0, 3).map((item) => (
            <div className="genre-title" key={item}>
              {item}
            </div>
          ))}
        </div>
      </FilmBottomContent>
    </FilmWrapper>
  );
};

const FilmWrapper = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: 3fr 10fr;
  grid-template-rows: 240px;
  width: 100%;

  @media (max-width: 1200px) {
    grid-template-columns: 1fr 2fr;
    grid-template-rows: 25vw;
  }

  @media (max-width: 767px) {
    grid-template-columns: 2fr 3fr;
    grid-template-rows: 60vw;
  }

  img {
    cursor: pointer;
    border-radius: 12px 0px 0px 12px;
    object-fit: cover;
    position: absolute;
    top: 0;
    height: 100%;
    width: 100%;
    left: 0;
  }
  img.watched {
    opacity: 0.7;
  }
`;

const FilmTopContent = styled.article`
  position: relative;

  padding-bottom: 58%;
  overflow: hidden;
  position: relative;

  .vote-rating {
    position: absolute;
    width: 100%;
    top: 5px;
    text-align: center;

    color: #ffffff;
    font-size: 26px;
    z-index: 9;
    font-family: "Russo One", sans-serif;
    letter-spacing: 1px;
    line-height: 39px;
  }
`;

const FilmBottomContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;

  min-height: 120px;

  border-radius: 0px 12px 12px 0px;
  background: #f1f1f1;
  padding: 25px 20px;

  @media (max-width: 1200px) {
    padding: 10px 15px;
  }

  .genre-title {
    text-transform: lowercase;
    background: #d9d9d9;
    display: inline-block;
    border-radius: 12px;
    padding: 2px 15px 4px 15px;
    font-size: 13px;
    margin-right: 8px;

    &:last-child {
      margin-right: 0px;
    }
    @media (max-width: 1200px) {
      font-size: 14px;
      padding: 1px 10px 3px 10px;
      margin-bottom: 5px;
    }

    @media (max-width: 767px) {
      font-size: 12px;
      padding: 0px 8px 2px 8px;
      margin-bottom: 5px;

      &:last-child {
        margin-bottom: 0px;
      }
    }
  }
  .title {
    font-size: 18px;
    font-weight: 500;
    margin-bottom: 10px;
    cursor: pointer;

    @media (max-width: 1200px) {
      font-size: 16px;
      line-height: 150%;
    }

    @media (max-width: 767px) {
      font-size: 14px;
      line-height: 150%;
    }
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
`;

const FilmParameters = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;

  font-size: 14px;
  color: #555;

  .release__wrapper {
    display: flex;
    align-items: center;
    flex-direction: column;
  }

  .release__day {
    font-family: "Russo One", sans-serif;
    font-size: 34px;
    line-height: 34px;
  }

  .release__date {
    color: #6b6b6b;
  }
`;

const ButtonBlock = styled.div`
  position: absolute;
  right: 17px;
  bottom: 15px;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 50%;

  cursor: pointer;

  @media (max-width: 1200px) {
    width: unset;
    top: unset;
    right: unset;
    left: 10px;
    justify-content: flex-start;
    bottom: 10px;
  }

  @media (max-width: 767px) {
    & .title-button.active {
      right: 40px;
      opacity: 1;
      visibility: hidden;
    }
  }

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
`;

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
    display: none;
  }

  @media (max-width: 767px) {
    display: none;
  }
`;

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
      font-size: 22px;
    }
  }

  @media (max-width: 1200px) {
    height: 40px;
    width: 40px;
    font-size: 16px;
  }

  @media (max-width: 767px) {
    height: 34px;
    width: 34px;
    font-size: 16px;
  }
`;

export default FilmRow;
