import React from 'react';
import "./style.css";

export default function Circuit(props) {

  // React does not allow object as child in li below, so set an array of exercise names

  console.log("Circuit: exercise list:", props.exerciseList);

  const namesArray = props.exerciseList.map(exercise => exercise.name);
  console.log("newArray", namesArray);

  var block1 =
    <ul className="list-group text-center mb-3">
      <li className="list-group-item bg-sun title"> BLOCK 1</li>
      {props.exerciseList.map(exercise =>
        <li className="list-group-item bg-ocean">{exercise.name}</li>
      )}
      <li className="list-group-item pt-0 pb-0 bg-light-grey rest">1.5 minute rest</li>
    </ul>;

  var block2 =
    <ul className="list-group text-center mb-3">
      <li className="list-group-item bg-sun title"> BLOCK 2</li>
      {props.exerciseList.map(exercise =>
        <li className="list-group-item bg-ocean-darken-2">{exercise.name}</li>
      )}
      <li className="list-group-item pt-0 pb-0 bg-light-grey rest">1.5 minute rest</li>
    </ul>;

  var block3 =
    <ul className="list-group text-center mb-3">
      <li className="list-group-item bg-sun title"> BLOCK 3</li>
      {props.exerciseList.map(exercise =>
        <li className="list-group-item bg-ocean-darken-4">{exercise.name}</li>
      )}
      <li className="list-group-item pt-0 pb-0 bg-light-grey rest">1.5 minute rest</li>
    </ul>;

  // if (props.exerciseList.length <= 3) {
  //   return block1;
  // }
  // if (props.exerciseList.length > 3 && props.exerciseList.length <= 6) {
  //   return block2;
  // }
  // if (props.exerciseList.length < 10) {
  //   return block3;
  // }


  return (
    <div>
      <div className="text-center">
        <h4>3x3x3 Circuit</h4>
        <p>30s Work | 15s Rest</p>
        <p>Complete each block 3x</p>
      </div>

      <ul className="list-group text-center mb-3">
        <li className="list-group-item bg-sun title"> BLOCK 1</li>
        {props.exerciseList.map(exercise =>
          <li className="list-group-item bg-ocean">{exercise.name}</li>
        )}
        <li className="list-group-item pt-0 pb-0 bg-light-grey rest">1.5 minute rest</li>
      </ul>

      <ul className="list-group text-center mb-3">
        <li className="list-group-item bg-sun title"> BLOCK 2</li>
        {props.exerciseList.map(exercise =>
          <li className="list-group-item bg-ocean">{exercise.name}</li>
        )}
        <li className="list-group-item pt-0 pb-0 bg-light-grey rest">1.5 minute rest</li>
      </ul>

      <ul className="list-group text-center mb-3">
        <li className="list-group-item bg-sun title"> BLOCK 3</li>
        {props.exerciseList.map(exercise =>
          <li className="list-group-item bg-ocean">{exercise.name}</li>
        )}
        <li className="list-group-item pt-0 pb-0 bg-light-grey rest">Cool Down</li>
      </ul>

    </div>
  );
}