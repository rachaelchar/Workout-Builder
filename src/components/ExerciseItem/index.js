import React from 'react';
import './style.css';

export default function ExerciseItem(props) {

  return (
    <li className="list-group-item">{props.exercise.name}
      {/* use ternary operator to render + or - button based on which list the item is in */}
      {
        props.list === "exerciseList" ?
          < button
            className="btn btn-ocean btn-sm float-right text-sun"
            onClick={() => props.addToWorkout(props.exercise)}
          >+</button>
          :
          < button
            className="btn btn-sun btn-sm float-right text-ocean"
            onClick={() => props.removeFromWorkout(props.exercise)
            }
          >-</button >
      }
    </li >
  );
}