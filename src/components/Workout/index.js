import React from 'react';
import ExerciseItem from "../ExerciseItem";
import SaveButton from "../SaveButton";
import Circuit from "../Circuit";
import Ladder from "../Ladder";

export default function Workout(props) {

  let template;
  // Render the template that the user has selected, if appropriate.
  if (props.workoutType === "circuit") {
    template = <Circuit />;
  } else if (props.workoutType === "ladder") {
    template = <Ladder />;
  }

  // Otherwise, return the Workout ul
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

      {template}

      <SaveButton
        saveWorkout={props.saveWorkout} />
      {/* if select value = "circuit" render Circuit component */}

      {/* if select value = "ladder" render Ladder component */}

    </div>
  );
}