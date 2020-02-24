import React from 'react';
import ExerciseItem from '../ExerciseItem';

export default function ExerciseList(props) {
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
    </ul>
  );
}