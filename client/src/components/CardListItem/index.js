import React from 'react';
import './style.css';

export default function CardListItem(props) {

  return (
    <>
      <li className="text-center">{props.workout.name}</li>
    </>
  )
}
