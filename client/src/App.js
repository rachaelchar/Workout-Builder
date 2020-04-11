import React, { useState } from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import MyWorkouts from './pages/MyWorkouts';
import { BrowserRouter as Router, Route } from 'react-router-dom';

function App() {

  const [savedWorkouts, setSavedWorkouts] = useState([]);

  return (
    <Router>
      <div>
        <Header />
        <Route
          exact path="/"
          component={Home}
          savedWorkouts={savedWorkouts}
          setSavedWorkouts={setSavedWorkouts}
        >
        </Route>
        <Route
          path="/myworkouts"
          component={MyWorkouts}
          savedWorkouts={savedWorkouts}
          setSavedWorkouts={setSavedWorkouts}
        ></Route>
      </div>
    </Router>
  )
}

export default App;
