import React, { useEffect } from 'react';
import './style.css';
// import CardListItem from '../CardListItem';

export default function Card(props) {

  return (
    <>
      <div className="card mr-1">
        <div className="card-body">
          <h4>{props.title}</h4>
          <hr />
          <ul className="list-group list-group-flush">
            {/* for each workout, iterate through the exercise objects to select and display the 'name' property of each */}
            {props.workout.workout.map(item =>
              < li className="ml-3">{item.name}</li>
            )}
          </ul>
        </div>
        <button className="bg-sun mt-2" onClick={props.deleteWorkout}>Delete</button>
      </div>
    </>
  )
}
