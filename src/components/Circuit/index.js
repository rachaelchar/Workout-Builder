import React from 'react';
import ExerciseItem from '../ExerciseItem';

export default function Circuit(props) {
  let numOfListItems = 0;

  return (
    <div>
      <h5>3x3x3 Circuit</h5>
      <p>Complete 3 rounds of each block</p>
      <p>Work for 30 seconds | Rest for 30 seconds</p>
      {/* <ul className="list-group">
        {props.exerciseList.map((exercise) =>
          <ExerciseItem
            key={exercise.name}
            exercise={exercise}
            list="workout"
            removeFromWorkout={props.removeFromWorkout}
            numOfListItems={numOfListItems++}
          />
        )}
        {console.log(numOfListItems)}

      </ul> */}
    </div>
  );
}