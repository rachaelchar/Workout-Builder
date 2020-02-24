import React from 'react';
import ExerciseItem from "../ExerciseItem";

export default function Workout(props) {
  return (
    <div>
      <h4 className="text-center">Workout</h4>
      <ul className="list-group">
        {props.exerciseList.map((exercise) =>
          <ExerciseItem
            // FIX: remove by id still removes all exercises from workout; want to remove just the clicked one
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