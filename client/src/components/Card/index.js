import React from 'react';
import './style.css';

export default function Card(props) {

  return (
    // Reusable card for workouts on MyWorkouts Page
    <div className="container mt-4">
      <div className="card-group">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Card title</h5>
            <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Cras justo odio</li>
            <li className="list-group-item">Dapibus ac facilisis in</li>
            <li className="list-group-item">Vestibulum at eros</li>
          </ul>
          <button className="bg-sun">Delete</button>

        </div>
      </div>
    </div>
  );
}
