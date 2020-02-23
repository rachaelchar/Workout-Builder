import React from 'react';

export default function Search() {
  return (
    <div class="form-group">
      <label for="workoutType">Workout Type</label>
      <select class="form-control" id="workoutType">
        <option value="all">- Select -</option>
        <option value="upper">Upper Body</option>
        <option value="lower">Lower Body</option>
        <option value="full">Full Body</option>
        <option value="circuit">Circuit</option>
        <option value="ladder">Ladder</option>
      </select>
    </div>
  );
}