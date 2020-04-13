import React from 'react';
import './style.css';

export default function CardListItem(props) {


  return (
    <>
      {props.retrievedWorkouts.map((workout, index) =>
        // need to iterate 0 - array.length only for that particular workout
        <li key={index} className="text-center">{workout[0].name}</li>
      )
      }
    </>
  )
}
