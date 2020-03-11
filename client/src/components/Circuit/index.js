import React from 'react';
import "./style.css";

export default function Circuit(props) {

  // React does not allow object as child in li below, so set an array of exercise names
  const namesArray = props.exerciseList.map(exercise => exercise.name);
  console.log("newArray", namesArray);

  return (
    <div>
      <div className="text-center">
        <h4>3x3x3 Circuit</h4>
        <p>30s Work | 15s Rest</p>
        <p>Complete each block 3x</p>
      </div>

      <ul className="list-group text-center mb-3">
        <li className="list-group-item bg-sun title"> BLOCK 1</li>
        <li className="list-group-item bg-ocean">{namesArray[0]}</li>
        <li className="list-group-item bg-ocean">{namesArray[1]}</li>
        <li className="list-group-item bg-ocean">{namesArray[2]}</li>
        <li className="list-group-item pt-0 pb-0 bg-light-grey rest">1.5 minute rest</li>
      </ul>

      <ul className="list-group text-center mb-3">
        <li className="list-group-item bg-sun title"> BLOCK 2</li>
        <li className="list-group-item bg-ocean-darken-2">{namesArray[3]}</li>
        <li className="list-group-item bg-ocean-darken-2">{namesArray[4]}</li>
        <li className="list-group-item bg-ocean-darken-2">{namesArray[5]}</li>
        <li className="list-group-item pt-0 pb-0 bg-light-grey rest">1.5 minute rest</li>
      </ul>

      <ul className="list-group text-center mb-3">
        <li className="list-group-item bg-sun title"> BLOCK 3</li>
        <li className="list-group-item bg-ocean-darken-4">{namesArray[6]}</li>
        <li className="list-group-item bg-ocean-darken-4">{namesArray[7]}</li>
        <li className="list-group-item bg-ocean-darken-4">{namesArray[8]}</li>
        <li className="list-group-item pt-0 pb-0 bg-light-grey rest">Cool Down</li>
      </ul>

    </div>
  );
}