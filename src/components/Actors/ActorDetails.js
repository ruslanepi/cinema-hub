import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { loadActor } from "../../redux/actions/filmsAction";
import { useDispatch } from "react-redux";
import styled from "styled-components";

import tempImage from "../../images/temp-img.jpg";

const ActorDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { actorDetail, isLoading } = useSelector((state) => state.actor);
  const { name, profile_path, biography, birthday, place_of_birth } =
    actorDetail;

  useEffect(() => {
    dispatch(loadActor(id));
  }, [id, dispatch]);

  return (
    <Actor>
      {!isLoading && (
        <div className="actor__wrapper">
          <div className="actor__image">
            <img
              src={
                profile_path
                  ? `https://image.tmdb.org/t/p/w500${profile_path} `
                  : tempImage
              }
              alt={name}
            />
          </div>
          <div className="actor__info ">
            <div className="actor__name">
              <h1>{name} </h1>
              <span>{birthday}</span>
              <p>{place_of_birth}</p>
            </div>
            <p>{biography}</p>
          </div>
        </div>
      )}

      {isLoading && <div>Загрузка...</div>}
    </Actor>
  );
};

const Actor = styled.article`
  .actor__wrapper {
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    @media (max-width: 767px) {
      display: flex;
      flex-direction: column;
    }
  }

  .actor__image {
    padding: 30px;

    @media (max-width: 767px) {
      padding: 15px;
    }

    img {
      border-radius: 12px;
      width: 100%;
      height: auto;
    }
  }

  .actor__info {
    padding: 30px;

    @media (max-width: 767px) {
      padding: 15px;
    }

    .actor__name {
      margin-bottom: 30px;
      padding-bottom: 30px;
      border-bottom: 1px solid #ffbc00;

      h1 {
        font-size: 32px;
        font-size: bold;
      }
      span {
        display: block;
        font-size: 24px;
        padding-bottom: 10px;
      }
    }
  }
`;

export default ActorDetails;
