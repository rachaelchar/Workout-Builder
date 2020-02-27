import React from "react";
import ExerciseItem from "../ExerciseItem";

export default function Ladder(props) {

  return (
    <div className="text-center">
      <h4>Ladder</h4>
      <p>30s work | 30s rest</p>
      <ul className="list-group">
        <li className="list-group-item pl-1 text-left">5x </li>
        <li className="list-group-item pt-0 pb-0">1.5 minute rest</li>

        <li className="list-group-item pl-1 text-left">4x </li>
        <li className="list-group-item pt-0 pb-0">1.5 minute rest</li>

        <li className="list-group-item pl-1 text-left">3x </li>
        <li className="list-group-item pt-0 pb-0">1.5 minute rest</li>

        <li className="list-group-item pl-1 text-left">2x </li>
        <li className="list-group-item pt-0 pb-0">1.5 minute rest</li>

        <li className="list-group-item pl-1 text-left">1x </li>
        <li className="list-group-item pt-0 pb-0">1.5 minute rest</li>

        <li className="list-group-item pl-1 text-left">2x </li>
        <li className="list-group-item pt-0 pb-0">1.5 minute rest</li>

        <li className="list-group-item pl-1 text-left">3x </li>
        <li className="list-group-item pt-0 pb-0">1.5 minute rest</li>

        <li className="list-group-item pl-1 text-left">4x </li>
        <li className="list-group-item pt-0 pb-0">1.5 minute rest</li>

        <li className="list-group-item pl-1 text-left">5x </li>
        <li className="list-group-item pt-0 pb-0">Cool Down</li>

      </ul>
    </div >
  )
}
