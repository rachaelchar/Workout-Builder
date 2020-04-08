import React from 'react';
import './style.css';
import logo from "../../workout_builder_icon.png";

export default function Header() {
  return (
    <nav className="navbar text-sun bg-ocean">
      {/* <a className="navbar-brand" href="#"> */}
      <span className="navbar-brand" >
        <a href="/">
          <img
            src={logo}
            className="img-logo"
            width="40" height="40"
            className="d-inline-block align-top" alt="" />
        </a>
        <a className="nav-link text-sun float-right" href="/myworkouts">My Workouts</a>
      </span>
    </nav >

  );
}
