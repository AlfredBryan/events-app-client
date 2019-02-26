import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

class Home extends Component {
  render() {
    return (
      <div className="wrapper">
        <div className="home-main">
          <ul>
            <Link to="/home">
              <li>Home</li>
            </Link>
            <Link to="#">
              <li>Health</li>
            </Link>
            <Link to="#">
              <li>Make Appointment</li>
            </Link>
            <Link to="/home">
              <li>Events</li>
            </Link>
          </ul>
        </div>
      </div>
    );
  }
}

export default Home;
