import React from 'react';
import './style.css';
import Card from '../Card';

export default function CardGroup(props) {

  const retrievedWorkouts = JSON.parse(localStorage.getItem('storedWorkouts'));
  console.log("workoutList: ", retrievedWorkouts);

  return (
    <div className="container mt-4">
      <div className="card-group">
        {retrievedWorkouts.map((workout) =>
          <Card
            key={workout.time}
            list="savedWorkout"
            retrievedWorkouts={retrievedWorkouts}
          />
        )}
      </div>
    </div>
  );
}
