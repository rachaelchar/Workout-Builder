import React, { useEffect } from 'react';

export default function MyWorkouts() {

  const getWorkout = () => {
    var lastWorkout = (localStorage.getItem("Workout") || "[]");
    console.log("Last workout: ", lastWorkout);
  }

  useEffect(() => {
    getWorkout();
  }, []);

  return (
    <h1>My Workouts Page</h1>
  )
}