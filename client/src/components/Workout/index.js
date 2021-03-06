import React from 'react';
import ExerciseItem from "../ExerciseItem";
import SaveButton from "../SaveButton";
import Circuit from "../Circuit";
import Ladder from "../Ladder";

export default function Workout(props) {

  let template;

  // Render the template that the user has selected, if appropriate.
  if (props.workoutType === "circuit") {
    template = <Circuit
      exerciseList={props.exerciseList}
      removeFromWorkout={props.removeFromWorkout}

    />;
  } else if (props.workoutType === "ladder") {
    template = <Ladder
      exerciseList={props.exerciseList}
      removeFromWorkout={props.removeFromWorkout}

    />;
  } else {
    // Otherwise, build the workout without a template.
    template =
      <div>
        <h4 className="text-center">Workout</h4>
        <ul className="list-group">
          {props.exerciseList.map((exercise, index) =>
            <ExerciseItem
              key={index}
              exercise={exercise}
              list="workout"
              removeFromWorkout={props.removeFromWorkout}
            />
          )}
        </ul>
      </div>;
  }

  return (
    <div>
      {template}
      {props.exerciseList.length >= 1 ?
        <SaveButton
          saveWorkout={props.saveWorkout} />
        :
        <h5 className="text-center text-secondary mt-4 font-italic">Add an exercise to begin!</h5>
      }
    </div>
  );
}