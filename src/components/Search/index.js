import React from 'react';



export default function Search() {
  return (
    <div className="col-12">
      <div className="form-group">
        <label for="workoutType">Workout Type</label>
        <select className="form-control" id="workoutType">
          <option value="all">- View All -</option>
          <option value="upper">Upper Body</option>
          <option value="lower">Lower Body</option>
          <option value="circuit">Circuit</option>
          <option value="ladder">Ladder</option>
        </select>
      </div>
    </div>
  );
}