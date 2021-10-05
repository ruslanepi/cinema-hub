import React from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";

const ActorDetails = () => {
  const { id } = useParams();
  const { popularActors } = useSelector((state) => state.actors);

  const currentActor = popularActors.find((actor) => actor.id == id);
  console.log(currentActor);

  return (
    <div>
      {currentActor.known_for.map((item) => (
        <div key={item.id}>{item.title}</div>
      ))}
    </div>
  );
};

export default ActorDetails;
