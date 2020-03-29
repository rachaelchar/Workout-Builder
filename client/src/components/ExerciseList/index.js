import React, { useState } from "react";
import ExerciseItem from '../ExerciseItem';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import "./style.css";
import Axios from "axios";


export default function ExerciseList(props) {
  const [show, setShow] = useState(false);
  const [exerciseName, setExerciseName] = useState('');
  const [exerciseType, setExerciseType] = useState('');
  const [muscleGroup, setMuscleGroup] = useState('');
  const [isAerobic, setIsAerobic] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("exercise name: ", exerciseName);
    console.log("exercise type: ", exerciseType);
    console.log("muscle group: ", muscleGroup);
    console.log("is aerobic: ", isAerobic);
  }

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
        <Button className="btn btn-ocean mb-4" onClick={handleShow}>
          Add Your Own Exercise
      </Button>
      </ul >

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title className="text-ocean">Add Your Own Exercise</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form onSubmit={handleSubmit}>
            <label id="name" className="pt-1">Exercise Name</label>
            <input type="text" required className="form-control" name="exerciseName" onChange={(e) => setExerciseName(e.target.value)}></input>

            <label className="pt-3">Exercise Type</label>
            <select className="form-control" name="exerciseType" onChange={(e) => setExerciseType(e.target.value)}>
              <option value="all">- Select -</option>
              <option value="upper">Upper Body</option>
              <option value="lower">Lower Body</option>
              <option value="circuit">Circuit</option>
              <option value="cardio">Cardio</option>
            </select>

            <label className="pt-3">Muscle Group</label>
            <select className="form-control" name="muscleGroup" onChange={(e) => setMuscleGroup(e.target.value)}>
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

            <div className="pl-4 pt-4 mb-4">
              <input className="form-check-input" type="checkbox" value="true" id="aerobic" name="isAerobic" onChange={(e) => setIsAerobic(e.target.value)} />
              <label className="form-check-label" htmlFor="aerobic">
                I would use this exercise in a circuit workout.
            </label>
            </div>
            <hr />
            <Button className="btn-light-grey mt-2 mr-4" onClick={handleClose}>
              Close
            </Button>
            <Button className="btn-sun mt-2 float-right" type="submit">
              Save Changes
            </Button>
          </form>
        </Modal.Body>
      </Modal>
    </>
  );
}

