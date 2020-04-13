import React from 'react';
import CardListItem from '../CardListItem';


export default function Card(props) {

  const deleteWorkout = (workout) => {
    const newWorkoutArray = props.retrievedWorkouts.filter((deletedWorkout) => {
      // return the complete list of exercises that do not match the key of the deleted exercise
      return workout.time !== deletedWorkout.time
    });

    // override the storedWorkouts key with the newly updated workout array
    localStorage.setItem("storedWorkouts", JSON.stringify(newWorkoutArray));
  }

  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title text-center">{(props.retrievedWorkouts[0].time)}</h5>
      </div>
      <ul className="list-group list-group-flush">
        {props.retrievedWorkouts.map((workout, index) =>
          <CardListItem
            key={index}
            workout={workout}
            list="savedWorkout"
            retrievedWorkouts={props.retrievedWorkouts}
          />
        )}
      </ul>
      <button className="bg-sun" onClick={deleteWorkout}>Delete</button>
    </div>
  )
}
