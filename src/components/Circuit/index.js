import React from 'react';
import ExerciseItem from '../ExerciseItem';

export default function Circuit(props) {
  return (
    <div>
      <h5>3x3x3 Circuit</h5>
      <ul className="list-group">
        {props.exerciseList.map((exercise) =>
          <ExerciseItem
            key={exercise.name}
            exercise={exercise}
            list="workout"
            removeFromWorkout={props.removeFromWorkout}
          />
        )}
      </ul>
    </div>
  );
}