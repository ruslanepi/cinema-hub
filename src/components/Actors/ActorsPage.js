import React, { useEffect } from "react";
import Actor from "./Actor";
import styled from "styled-components";
import ActorDetails from "./ActorDetails";

import { useSelector, useDispatch } from "react-redux";
import { loadActors } from "../../actions/filmsAction";
import { Switch, Route } from "react-router";

const Actors = () => {
  const dispatch = useDispatch();
  const { popularActors } = useSelector((state) => state.actors);

  useEffect(() => {
    dispatch(loadActors());
  }, [dispatch]);

  return (
    <Switch>
      <Route path="/actors/:id">
        <ActorDetails />
      </Route>
      <Route path="/actors">
        <ActorsWrapper>
          {popularActors.map((actor) => (
            <Actor key={actor.id} {...actor} />
          ))}
        </ActorsWrapper>
      </Route>
    </Switch>
  );
};

const ActorsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 15px;
`;

export default Actors;
