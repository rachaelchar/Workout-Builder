import React from 'react';
import './style.css';
import logo from "../../workout_builder_icon.png";

export default function Header() {
  return (
    <nav className="navbar navbar-ocean bg-yellow">
      <span className="navbar-brand" href="#">
        <img
          src={logo}
          className="img-logo"
          width="30" height="30"
          class="d-inline-block align-top" alt="" />
      </span>
    </nav>
  );
}