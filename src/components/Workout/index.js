import React from 'react';
import ExerciseItem from "../ExerciseItem";
import SaveButton from "../SaveButton";
// import Circuit from "../Circuit";
// import Ladder from "../Ladder";

export default function Workout(props) {
  return (
    <div>
      <h4 className="text-center">Workout</h4>
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
      <SaveButton
        onclick={props.alertSave} />
      {/* if select value = "circuit" render Circuit component */}

      {/* if select value = "ladder" render Ladder component */}

    </div>
  );
}