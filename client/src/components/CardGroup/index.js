import React from 'react';
import './style.css';
import Card from '../Card';

export default function CardGroup() {

  var retrievedWorkouts;
  if (JSON.parse(localStorage.getItem('storedWorkouts')) === null) {
    retrievedWorkouts = [];
  } else {
    retrievedWorkouts = JSON.parse(localStorage.getItem('storedWorkouts'));
  }

  const deleteWorkout = (workout) => {
    const newWorkoutArray = retrievedWorkouts.filter((deletedWorkout) => {
      // return the complete list of exercises that do not match the key of the deleted exercise
      return workout.time !== deletedWorkout.time
    });

    // override the storedWorkouts key with the newly updated workout array
    localStorage.setItem("storedWorkouts", JSON.stringify(newWorkoutArray));
  }

  return (
    <div className="container mt-4">
      <div className="card-group">
        {retrievedWorkouts.map((workout, index) =>
          <Card
            title={workout.time}
            workout={workout}
            key={index}
            retrievedWorkouts={retrievedWorkouts}
            deleteWorkout={deleteWorkout}
          />
        )}
      </div>
    </div>
  );
}
