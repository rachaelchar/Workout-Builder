import React from 'react';
import "./style.css";

export default function Circuit(props) {

  // React does not allow object as child in li below, so set an array of exercise names

  console.log("Circuit: exercise list:", props.exerciseList);

  const namesArray = props.exerciseList.map(exercise => exercise.name);
  console.log("newArray", namesArray);

  var block1 = namesArray.slice(0, 3);

  var block2 = namesArray.slice(3, 6);

  var block3 = namesArray.slice(6, 9);



  return (
    <div>
      <div className="text-center">
        <h4>3x3x3 Circuit</h4>
        <p>30s Work | 15s Rest</p>
        <p>Complete each block 3x</p>
      </div>

      <ul className="list-group text-center mb-3">
        <li className="list-group-item bg-sun title"> BLOCK 1</li>
        {console.log("block1", block1)}
        {block1.map(exercise =>
          <li className="list-group-item bg-ocean">{exercise}</li>
        )}
        <li className="list-group-item pt-0 pb-0 bg-light-grey rest">1.5 minute rest</li>
      </ul>

      <ul className="list-group text-center mb-3">
        <li className="list-group-item bg-sun title"> BLOCK 2</li>
        {block2.map(exercise =>
          <li className="list-group-item bg-ocean-darken-2">{exercise}</li>
        )}
        <li className="list-group-item pt-0 pb-0 bg-light-grey rest">1.5 minute rest</li>
      </ul>

      <ul className="list-group text-center mb-3">
        <li className="list-group-item bg-sun title"> BLOCK 3</li>
        {block3.map(exercise =>
          <li className="list-group-item bg-ocean-darken-4">{exercise}</li>
        )}
        <li className="list-group-item pt-0 pb-0 bg-light-grey rest">Cool Down</li>
      </ul>

    </div>
  );
}