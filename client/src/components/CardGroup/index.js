import React from 'react';
import './style.css';
import Card from '../Card';

export default function CardGroup() {

  const retrievedWorkouts = JSON.parse(localStorage.getItem('storedWorkouts'));
  console.log("workoutList: ", retrievedWorkouts);

  return (
    <div className="container mt-4">
      <div className="card-group">
        {retrievedWorkouts.map((workout, index) =>
          <Card
            key={index}
            list="savedWorkout"
            retrievedWorkouts={retrievedWorkouts}
          />
        )}
      </div>
    </div>
  );
}
