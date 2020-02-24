import React from 'react';
import ExerciseItem from "../ExerciseItem";

export default function Workout(props) {
  return (
    <div>
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