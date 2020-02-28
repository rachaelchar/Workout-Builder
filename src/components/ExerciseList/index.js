import React from 'react';
import ExerciseItem from '../ExerciseItem';
import "./style.css";

export default function ExerciseList(props) {

  const showModal = () => {

  }


  return (
    <ul className="list-group">
      {props.exerciseList.map((exercise) =>
        <ExerciseItem
          key={exercise.name}
          exercise={exercise}
          list="exerciseList"
          addToWorkout={props.addToWorkout}
          removeFromWorkout={props.removeFromWorkout}
        />
      )}

      {/* Button that triggers the modal to add an exercise to the database */}
      <li className="list-group-item text-center">
        <button
          type="button"
          class="btn btn-ocean"
          onClick=""
          data-toggle="modal"
          data-target="#exampleModalCenter">
          Add Your Own Exercise
        </button>
      </li>
    </ul>
  );
}