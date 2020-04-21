import React from 'react';
import './style.css';

export default function Card(props) {

  const deleteWorkout = () => {
    let savedWorkouts = JSON.parse(localStorage.getItem('storedWorkouts'));
    console.log(savedWorkouts);
    const index = savedWorkouts.indexOf(props.key);
    savedWorkouts.splice(index, 1);

    localStorage.setItem("storedWorkouts", JSON.stringify(savedWorkouts));
    props.setStoredWorkouts(savedWorkouts);
  }


  return (
    <>
      <div className="card mr-1">
        <div className="card-body">
          <h4>{props.title}</h4>
          <hr />
          <ul className="list-group list-group-flush">
            {/* for each workout, iterate through the exercise objects to select and display the 'name' property of each */}
            {props.workout.workout.map(item =>
              <li className="ml-3">{item.name}</li>
            )}
          </ul>
        </div>
        <button id={props.key} className="bg-sun mt-2" onClick={deleteWorkout}>Delete</button>
      </div>
    </>
  )
}
