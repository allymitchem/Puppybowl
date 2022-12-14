import React, { useState } from "react";

const PuppyList = (props) => {
  const myPuppies = props.puppyData;
  const SetPuppies = props.setPuppyDetails;

  return (
    <div className="box">
      {myPuppies.length ? (
        myPuppies.map((puppy) => {
          return (
            <div key={`player-${puppy.id}`} className="puppy">
              <span className="nameId">
                <div>{puppy.name}</div>
                <div>
                  <p className="puppyId">#{puppy.id}</p>
                </div>
              </span>
              <div>
                <img className="puppyPic" src={puppy.imageUrl} alt="puppyPic" />
              </div>

              <span className="buttons">
                <button onClick={() => SetPuppies(puppy)}>See Details</button>
              </span>
            </div>
          );
        })
      ) : (
        <div>loading</div>
      )}
    </div>
  );
};

export default PuppyList;

// console.log(myPuppies)
// import {PuppyDetails} from './PuppyDeets'
// import {PuppyPlayer} from './PuppyPlayer'
{
  /* <div>{puppy.breed}</div>
                <div>{puppy.status}</div> */
}
