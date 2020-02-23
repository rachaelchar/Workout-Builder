import React from 'react';
import Header from './components/Header';
import Search from './components/Search';
import ExerciseList from './components/ExerciseList';
import Workout from './components/Workout';

function App() {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="row mt-3">
          <div className="col-7">
            <Search />
            <ExerciseList />
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
