import React from "react";
import "./style.css";

export default function Ladder(props) {

  const namesArray = props.exerciseList.map(exercise => exercise.name);
  console.log("newArray", namesArray);

  return (
    <div className="text-center">
      <h4>Ladder</h4>
      <p>30s work | 30s rest</p>
      <ul className="list-group">
        <li className="list-group-item pl-1 bg-ocean-darken-4">5x {namesArray[0]}</li>
        <li className="list-group-item pt-0 pb-0 rest bg-light-grey">1.5 minute rest</li>


        <li className="list-group-item pl-1 bg-ocean-darken-3">4x {namesArray[1]}</li>
        <li className="list-group-item pt-0 pb-0 rest bg-light-grey">1.5 minute rest</li>

        <li className="list-group-item pl-1 bg-ocean-darken-2">3x {namesArray[2]}</li>
        <li className="list-group-item pt-0 pb-0 rest bg-light-grey">1.5 minute rest</li>

        <li className="list-group-item pl-1 bg-ocean-darken-1">2x {namesArray[3]}</li>
        <li className="list-group-item pt-0 pb-0 rest bg-light-grey">1.5 minute rest</li>

        <li className="list-group-item pl-1 bg-ocean">1x {namesArray[4]}</li>
        <li className="list-group-item pt-0 pb-0 rest bg-light-grey">1.5 minute rest</li>

        <li className="list-group-item pl-1 bg-ocean-darken-1">2x {namesArray[3]}</li>
        <li className="list-group-item pt-0 pb-0 rest bg-light-grey">1.5 minute rest</li>

        <li className="list-group-item pl-1 bg-ocean-darken-2">3x {namesArray[2]}</li>
        <li className="list-group-item pt-0 pb-0 rest bg-light-grey">1.5 minute rest</li>

        <li className="list-group-item pl-1 bg-ocean-darken-3">4x {namesArray[1]}</li>
        <li className="list-group-item pt-0 pb-0 rest bg-light-grey">1.5 minute rest</li>

        <li className="list-group-item pl-1 bg-ocean-darken-4">5x {namesArray[0]}</li>
        <li className="list-group-item pt-0 pb-0 rest bg-light-grey">Cool Down</li>

      </ul>
    </div >
  )
}
