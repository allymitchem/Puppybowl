import React, { useState } from "react";
import { Main } from "./";

const PuppyPlayer = (props) => {
  const puppy = props.puppyDetails;

  const resetState = () => {
    return setPuppyDetails(initialState);
  };

  return (
    <div key={`player-${puppy.id}`} className="puppy">
      <div>{puppy.name}</div>
      <div>
        <img className="puppyPic" src={puppy.imageUrl} alt="puppyPic" />
      </div>
      <div>
        <p>
          <b>Breed: </b>
          {puppy.breed}
        </p>
      </div>
      <div>
        <p>
          <b>Cohort ID: </b>
          {puppy.cohortId}
        </p>
      </div>

      <div>
        <p>
          <b>Status: </b>
          {puppy.status}
        </p>
      </div>
      <div>
        <p>
          <b>Team ID: </b>
          {puppy.teamId}
        </p>
      </div>
      <button onClick={() => Main}>Go Back</button>
    </div>
  );
};

export default PuppyPlayer;

// const initialState = {PuppyList}
{
  /* //currently working on reset state to initial state// */
}
// const BackState = history.replaceState(null, '', '/')
