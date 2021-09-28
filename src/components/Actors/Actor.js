import React from "react";
import styled from "styled-components";

const Actor = ({ name, profile_path }) => {
  return (
    <ActorWrapper>
      <img src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt="" />
      <p>{name}</p>
    </ActorWrapper>
  );
};

const ActorWrapper = styled.div`
  display: flex;
  flex-direction: column;

  margin-bottom: 20px;

  img {
    width: 100%;
    margin-bottom: 15px;
  }
`;

export default Actor;
