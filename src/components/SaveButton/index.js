import React from 'react';

export default function SaveButton(props) {

  return (
    <div className="text-center">
      <button
        className="btn btn-secondary mt-2"
        onClick={props.saveWorkout}>
        Save
      </button>
    </div>
  )
}