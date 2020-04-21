import React, { useEffect, useState } from 'react';
import Search from '../components/Search';
import ExerciseList from '../components/ExerciseList';
import Workout from '../components/Workout';
import Axios from 'axios';
import moment from "moment"

export default function Home() {
  const [filteredExerciseList, setFilteredExerciseList] = useState([]);
  const [workoutType, setWorkoutType] = useState();
  const [workout, setWorkout] = useState([]);

  // Function to add exercise to workout
  const addToWorkout = (exercise) => {
    setWorkout([
      ...workout,
      exercise
    ]);
  }

  // Function to remove exercise from workout
  const removeFromWorkout = (exercise) => {
    const newWorkoutList = workout.filter((deletedExercise) => {
      // return the complete list of exercises that do not match the key of the deleted exercise
      return exercise.name !== deletedExercise.name
    });
    setWorkout(newWorkoutList);
  }

  // Function to save the complete workout to local storage
  const saveWorkout = () => {

    var storedWorkouts;
    // may need if statement for saving first workout bc 'storedWorkouts' will be undefined
    if (JSON.parse(localStorage.getItem('storedWorkouts')) === null) {
      storedWorkouts = [];
    } else {
      storedWorkouts = JSON.parse(localStorage.getItem('storedWorkouts'));
    }

    // define loggedWorkout to include identifying type and time
    const loggedWorkout = {
      ...workout,
      workoutType: workoutType,
      time: moment().format('ddd, MM-DD-YYYY')
    }

    // push new loggedWorkout to storedWorkouts
    storedWorkouts.push(loggedWorkout);

    // resave storedWorkouts to local storage
    localStorage.setItem("storedWorkouts", JSON.stringify(storedWorkouts));

    console.log("logged workout: ", loggedWorkout);
  }

  const fetchAllExercises = () => {
    Axios.get("/api/exercises")
      .then(response => {
        const allExercises = response.data;
        return (allExercises);
      })
      .then(allExercises => {
        setFilteredExerciseList(allExercises);
      });
  }

  // When the component mounts, show all exercises 
  useEffect(() => {
    fetchAllExercises();
  }, []);

  // When a workout type is selected, show exercises compatible with that type
  useEffect(() => {
    Axios.get("/api/exercises")
      .then(response => {
        const allExercises = response.data;
        // Sort exercises alphabetically
        allExercises.sort((a, b) => (a.name > b.name) ? 1 : -1);
        // console.log(allExercises);
        return (allExercises);
      })
      .then(allExercises => {

        const filteredList = allExercises.filter((exercise) => {

          if (workoutType === "lower") {
            return exercise.type === "lower";
          }
          else if (workoutType === "upper") {
            return exercise.type === "upper";
          }
          else if (workoutType === "circuit") {
            return exercise.aerobic === true;
          }
          else if (workoutType === "ladder") {
            return exercise.aerobic === true;
          }
          else {
            return true;
          }
        });
        setFilteredExerciseList(filteredList);
      });

  }, [workoutType]);


  return (
    <div>
      <div className="container">
        <div className="row mt-3">
          <div className="col-7">
            <Search
              workoutType={workoutType}
              setWorkoutType={setWorkoutType}
            />
            <ExerciseList
              exerciseList={filteredExerciseList}
              addToWorkout={addToWorkout}
              fetchAllExercises={fetchAllExercises}
              workout={workout}
              setWorkout={setWorkout}
            />
          </div>
          <div className="col-5">
            <Workout
              exerciseList={workout}
              removeFromWorkout={removeFromWorkout}
              saveWorkout={saveWorkout}
              workoutType={workoutType}
            />
          </div>
        </div>
      </div>
    </div>
  );

}