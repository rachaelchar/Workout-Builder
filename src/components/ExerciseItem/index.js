import React from 'react';
import './style.css';

export default function ExerciseItem(props) {
  return (
    <li className="list-group-item">{props.exercise.name}
      <button
        className="btn btn-ocean btn-sm float-right text-sun"
        onClick={() => props.addToWorkout(props.exercise)}
      >+</button>
    </li>
  );
}