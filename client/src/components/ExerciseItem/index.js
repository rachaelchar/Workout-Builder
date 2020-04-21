import React from 'react';
import './style.css';

export default function ExerciseItem(props) {

  return (
    <li className="list-group-item">{props.exercise.name}
      {
        props.list === "exerciseList" ?
          < button
            className="btn btn-ocean btn-sm float-right"
            onClick={() => props.addToWorkout(props.exercise)}
          >+</button>
          :
          < button
            className="btn btn-sun btn-sm float-right"
            onClick={() => props.removeFromWorkout(props.exercise)
            }
          >-</button >
      }
    </li >
  );
}