import React, { useEffect } from 'react';
import './style.css';
// import ExerciseItem from '../ExerciseItem';

export default function Card(props) {

  useEffect(() => {
    // props.getWorkout();
    console.log(props.savedWorkouts);
  }, []);

  return (
    // Reusable card for workouts on MyWorkouts Page
    <div className="container mt-4">
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            {/* <ExerciseItem
              key={props.exercise.name}
              exercise={props.exercise}
              list="savedworkout"
            /> */}
          </ul>
          <button className="bg-sun">Delete</button>
        </div>
      </div>
    </div>
  );
}
