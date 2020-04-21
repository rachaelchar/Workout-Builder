import React, { useEffect, useState } from 'react';
import './style.css';
import Card from '../Card';

export default function CardGroup() {

  var retrievedWorkouts;
  if (JSON.parse(localStorage.getItem('storedWorkouts')) === null) {
    retrievedWorkouts = [];
  } else {
    retrievedWorkouts = JSON.parse(localStorage.getItem('storedWorkouts'));
  }

  const [storedWorkouts, setStoredWorkouts] = useState(retrievedWorkouts);

  useEffect(() => {
    // rerender cards
  }, [storedWorkouts]);

  return (
    <div className="container mt-4">
      <div className="card-group">
        {retrievedWorkouts.map((workout, index) =>
          <Card
            title={`${workout.time}: ${workout.workoutType}`}
            workout={workout}
            key={index}
            retrievedWorkouts={retrievedWorkouts}
            setStoredWorkouts={setStoredWorkouts}
          />
        )}
      </div>
    </div>
  );
}
