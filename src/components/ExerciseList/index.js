import React, { useState } from 'react';
import ExerciseItem from '../ExerciseItem';
// import Modal from '../Modal';
import "./style.css";

export default function ExerciseList(props) {

  const [show, setShow] = useState("false");

  const showModal = () => {
    setShow(true);
    console.log("Show me the modal")
  }

  return (
    <ul className="list-group">
      {props.exerciseList.map((exercise) =>
        <ExerciseItem
          key={exercise.name}
          exercise={exercise}
          list="exerciseList"
          addToWorkout={props.addToWorkout}
          removeFromWorkout={props.removeFromWorkout}
        />
      )}

      {/* Modal */}

      <div className="modal fade" id="exampleModalCenter" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
        <div
          className="modal-dialog modal-dialog-centered"
          role="document"
          show={"true"}
        >
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLongTitle">Add Your Own Exercise</h5>
              <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div className="modal-body">
              <form>
                <label>Exercise Name</label>
                <input type="text" className="form-control"></input>

                <label>Exercise Type</label>
                <select className="form-control">
                  <option value="all">- Select -</option>
                  <option value="upper">Upper Body</option>
                  <option value="lower">Lower Body</option>
                  <option value="circuit">Circuit</option>
                  <option value="cardio">Cardio</option>
                </select>

                <label>Muscle Group</label>
                <select className="form-control">
                  <option>- Select -</option>
                  <option value="back">Back</option>
                  <option value="biceps">Biceps</option>
                  <option value="calves">Calves</option>
                  <option value="chest">Chest</option>
                  <option value="core">Core</option>
                  <option value="glutes">Glutes</option>
                  <option value="hamstrings">Hamstrings</option>
                  <option value="quads">Quads</option>
                  <option value="shoulders">Shoulders</option>
                  <option value="triceps">Triceps</option>
                </select>

                <input className="form-check-input" type="checkbox" value="true" id="aerobic" />
                <label className="form-check-label" htmlFor="aerobic">
                  I would use this exercise in a circuit workout.
                </label>

              </form>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
              <button type="button" className="btn btn-primary">Save changes</button>
            </div>
          </div>
        </div>
      </div>

      {/* Button that triggers the modal to add an exercise to the database */}
      <li className="list-group-item text-center">
        <button
          type="button"
          className="btn btn-ocean"
          onClick={showModal}
          data-toggle="modal"
          data-target="#exampleModalCenter">
          Add Your Own Exercise
        </button>
      </li>
    </ul>
  );
}