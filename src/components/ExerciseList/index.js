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
        <Button variant="primary" onClick={handleShow}>
          Launch demo modal
      </Button>
      </ul >

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>

    </>
  );
}

