import React from 'react';
import CardListItem from '../CardListItem';

export default function Card(props) {

  // console.log(props.retrievedWorkouts[0]);

  props.retrievedWorkouts.forEach(function (workout) {
    for (var i = 0; i < workout.length; i++) {
    }
    var workout = workout[i];
    console.log(workout);
  });

  // const arrayOfWorkouts = [];

  // props.retrievedWorkouts.forEach(workout => {
  //   arrayOfWorkouts.push(workout.name);
  //   console.log(arrayOfWorkouts);
  // });


  return (
    <>
      <div className="card mr-1">
        <div className="card-body">
          <h4>{props.title}</h4>
        </div>
        <ul className="list-group list-group-flush">
          {/* for each workout, iterate through the exercise objects to select and display the 'name' property of each */}
          {/* {props.retrievedWorkouts.map() */}
          <li className="text-center">name</li>

          {/* } */}

          {/* {props.retrievedWorkouts.map((workout, index) =>
            <CardListItem
              key={index}
              workout={workout}
              retrievedWorkouts={props.retrievedWorkouts}
            />
          )} */}
        </ul>
        <button className="bg-sun" onClick={props.deleteWorkout}>Delete</button>
      </div>
    </>
  )
}
