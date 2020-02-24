import React, { useEffect, useState } from 'react';
import Header from './components/Header';
import Search from './components/Search';
import ExerciseList from './components/ExerciseList';
import Workout from './components/Workout';

// ============ FUNCTIONALITY NEEDED ============
// need all exercises
// var to save exercise array after filter
// add exercise to workout onClick add btn



function App() {
  // Placeholder data to use for now
  const rawExerciseList = [
    {
      name: "Calf Raises",
      type: "lower",
      muscle_group: "calves",
      // Can sort for circuit/ladder exercises by aerobic:true -- these exercises are speed friendly and/or can be done with only bodyweight or light weight 
      aerobic: true
    },
    {
      name: "Shoulder Press",
      type: "upper",
      muscle_group: "shoulders",
      aerobic: true
    },
    {
      name: "Sissy Squats",
      type: "lower",
      muscle_group: "Quads",
      aerobic: false
    },
    {
      name: "Bicep Curl",
      type: "upper",
      muscle_group: "biceps",
      aerobic: false
    },
    {
      name: "Jump Rope",
      type: "cardio",
      aerobic: true
    },
    {
      name: "Pull Ups",
      type: "upper",
      muscle_group: "back",
      aerobic: true
    },
    {
      name: "Box Jumps",
      type: "cardio",
      aerobic: true
    },
    {
      name: "Deadlift",
      type: "lower",
      muscle_group: "glutes",
      aerobic: false
    },
    {
      name: "Bench Press",
      type: "upper",
      muscle_group: "chest",
      aerobic: false
    },
    {
      name: "Push Ups",
      type: "upper",
      muscle_group: "chest",
      aerobic: true
    },
    {
      name: "Leg Lifts",
      type: "upper",
      muscle_group: "core",
      aerobic: true
    },
    {
      name: "Squat Jumps",
      type: "lower",
      muscle_group: "",
      aerobic: true
    },
    {
      name: "Interval Runs",
      type: "cardio",
      aerobic: true
    }
  ];

  const [filteredExerciseList, setFilteredExerciseList] = useState([]);


  useEffect(() => {
    setFilteredExerciseList(rawExerciseList);
  }, []);


  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-3">
          <div className="col-7">
            <Search />
            <ExerciseList
              exerciseList={filteredExerciseList}
            />
          </div>
          <div className="col-5">
            <Workout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
