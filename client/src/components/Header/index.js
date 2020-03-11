import React from 'react';
import './style.css';
import logo from "../../workout_builder_icon.png";

export default function Header() {
  return (
    <nav className="navbar navbar-sun bg-ocean">
      <span className="navbar-brand" href="#">
        <img
          src={logo}
          className="img-logo"
          width="40" height="40"
          className="d-inline-block align-top" alt="" />
      </span>
    </nav>
  );
}