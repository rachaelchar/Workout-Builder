import React from 'react';
import './style.css';

export default function CardListItem(props) {

  // console.log("CLI", props.retrievedWorkouts)

  // const arrayOfNames =
  //   console.log(props.workout)

  return (
    <>
      <li className="text-center">{props.workout.name}</li>
    </>
  )
}
