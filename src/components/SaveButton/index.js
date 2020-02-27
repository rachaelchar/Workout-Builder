import React from 'react';

export default function SaveButton(props) {

  return (
    <div className="text-center">
      <button
        className="btn btn-secondary mt-3"
        onClick={() => alert("Workout saved!")}>
        Save
      </button>
    </div>
  )
}