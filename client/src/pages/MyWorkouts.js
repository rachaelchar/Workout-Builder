import React, { useEffect } from 'react';
import Card from '../components/Card';

export default function MyWorkouts() {

  const getWorkout = () => {
    var lastWorkout = (localStorage.getItem("Workout") || "[]");
    console.log("Last workout: ", JSON.parse(lastWorkout));
  }

  useEffect(() => {
    getWorkout();
  }, []);

  return (
    <Card />
  )
}