import React from 'react';
import ExerciseItem from '../ExerciseItem/';

export default function ExerciseList(props) {
  return (
    <ul class="list-group">
      {props.exerciseList.map((exercise) =>
        <ExerciseItem
          exercise={exercise}
        />
      )}
    </ul>
  );
}