import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import MyWorkouts from './pages/MyWorkouts';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div>
        <Header />
        <Route exact path="/" component={Home}></Route>
        <Route path="/myworkouts" component={MyWorkouts}></Route>
      </div>
    </Router>
  )
}

export default App;
