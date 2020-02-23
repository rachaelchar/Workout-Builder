import React from 'react';
import './style.css';
import logo from "../../workout_builder_icon.png";

export default function Header() {
  return (
    <nav className="navbar navbar-ocean bg-sun">
      <span className="navbar-brand" href="#">
        <img
          src={logo}
          className="img-logo"
          width="40" height="40"
          class="d-inline-block align-top" alt="" />
      </span>
    </nav>
  );
}