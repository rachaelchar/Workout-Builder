import React from 'react';
// import ExerciseItem from '../ExerciseItem';

export default function Circuit(props) {
  // let numOfListItems = 0;

  return (
    <div>
      <h5>3x3x3 Circuit</h5>
      <p>Complete 3 rounds of each block</p>
      <p>Work for 30 seconds | Rest for 30 seconds</p>

      <ul className="list-group text-center mb-3">
        <li className="list-group-item"> BLOCK 1</li>
        <li className="list-group-item pl-1"></li>
        <li className="list-group-item pl-1"></li>
        <li className="list-group-item pl-1"></li>
        <li className="list-group-item pt-0 pb-0">1.5 minute rest</li>
      </ul>

      <ul className="list-group text-center mb-3">
        <li className="list-group-item"> BLOCK 2</li>
        <li className="list-group-item pl-1"></li>
        <li className="list-group-item pl-1"></li>
        <li className="list-group-item pl-1"></li>
        <li className="list-group-item pt-0 pb-0">1.5 minute rest</li>
      </ul>

      <ul className="list-group text-center mb-3">
        <li className="list-group-item"> BLOCK 3</li>
        <li className="list-group-item pl-1"></li>
        <li className="list-group-item pl-1"></li>
        <li className="list-group-item pl-1"></li>
        <li className="list-group-item pt-0 pb-0">Cool Down</li>

      </ul>

      {/* numOfListItems={numOfListItems++} */}

    </div>
  );
}