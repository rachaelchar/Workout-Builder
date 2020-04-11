import React, { useEffect } from 'react';
import Card from '../components/Card';

export default function MyWorkouts(props) {

  const getWorkouts = () => {

    // console.log("Last workout: ", JSON.parse(lastWorkout));

    console.log("Saved Workouts:", props.savedWorkouts);
  }

  useEffect(() => {
    getWorkouts();
  }, []);

  return (
    <Card
      getWorkouts={getWorkouts}
      exercise={props.exercise}
      savedWorkouts={props.savedWorkouts}
    />
  )
}