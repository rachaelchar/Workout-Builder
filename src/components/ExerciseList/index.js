import React, { useState } from "react";
import ExerciseItem from '../ExerciseItem';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./style.css";


export default function ExerciseList(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
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
        <Button className="btn btn-ocean" onClick={handleShow}>
          Add Your Own Exercise
      </Button>
      </ul >

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Your Own Exercise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label className="pt-1">Exercise Name</label>
            <input type="text" className="form-control"></input>

            <label className="pt-3">Exercise Type</label>
            <select className="form-control">
              <option value="all">- Select -</option>
              <option value="upper">Upper Body</option>
              <option value="lower">Lower Body</option>
              <option value="circuit">Circuit</option>
              <option value="cardio">Cardio</option>
            </select>

            <label className="pt-3">Muscle Group</label>
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

            <div className="pl-4 pt-4">
              <input className="form-check-input" type="checkbox" value="true" id="aerobic" />
              <label className="form-check-label" htmlFor="aerobic">
                I would use this exercise in a circuit workout.
            </label>
            </div>

          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button className="btn-light-grey " onClick={handleClose}>
            Close
          </Button>
          <Button className="btn-sun" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

