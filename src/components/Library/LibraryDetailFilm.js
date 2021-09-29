import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getDetails } from "../../actions/filmsAction";
import DetailSlider from "../Detail/DetailSlider";

const LibraryDetailFilm = () => {
  const { id } = useParams();
  const { title, vote_average, overview, tagline, budget } = useSelector(
    (state) => state.details.filmDetails
  );
  const { backdrops } = useSelector((state) => state.details.filmScreens);
  const { isLoading } = useSelector((state) => state.details);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetails(id));
  }, [dispatch, id]);

  return (
    <>
      {!isLoading && (
        <FilmWrapper>
          <div className="title">{title}</div>
          <span>{tagline}</span>
          <div>Бюджет {budget}</div>
          <div>Оценка: {vote_average} / 10</div>
          <p>{overview}</p>
          <SliderWrapper>
            <DetailSlider />
          </SliderWrapper>
        </FilmWrapper>
      )}
    </>
  );
};

const FilmWrapper = styled.div``;

const SliderWrapper = styled.article`
  width: 500px;
`;

export default LibraryDetailFilm;
