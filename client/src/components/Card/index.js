import React, { useEffect } from 'react';
// import CardListItem from '../CardListItem';

export default function Card(props) {

  // props.retrievedWorkouts.map(workout => {
  // console.log(props.retrievedWorkouts[i]);
  // for (var i; i <= props.retrievedWorkouts.length; i++) {
  //   console.log(props.retrievedWorkouts[i]);
  // }

  props.retrievedWorkouts.forEach(workout => {
    for (var i; i <= props.retrievedWorkouts.length; i++) {
      console.log(workout[i].name);
    }
  });


  return (
    <>
      <div className="card mr-1">
        <div className="card-body">
          <h4>{props.title}</h4>
        </div>
        <ul className="list-group list-group-flush">
          {/* for each workout, iterate through the exercise objects to select and display the 'name' property of each */}
          <li className="text-center">{props.workout[0].name}</li>
        </ul>
        <button className="bg-sun" onClick={props.deleteWorkout}>Delete</button>
      </div>
    </>
  )
}
