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
        <div className="row">
          <Search />
        </div>
        <div className="row">
          <div className="col-8">
            <ExerciseList />
          </div>
          <div className="col-4">
            <Workout />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
