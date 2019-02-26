import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import "./Home.css";

class Home extends Component {
  state = {};

  parseJwt = token => {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };

  render() {
    let token = localStorage.getItem("token");
    console.log(this.parseJwt(token));
    return (
      <React.Fragment>
        <NavBar />
        <div className="container wrapper home-page">
          <div className="row">
            <div className="col-9 mx-auto col-md-6 col-lg-4 link">
              <Link to="/create/event">
                <i className="fa fa-plus" style={{ fontSize: "20px" }}>
                  <span style={{ padding: "10px" }}>Create Events</span>
                </i>
              </Link>
            </div>

            <div className="col-9 mx-auto col-md-6 col-lg-4 link">
              <Link to="/users/view">
                <i className="fa fa-users" style={{ fontSize: "20px" }}>
                  <span style={{ padding: "10px" }}>View registered Users</span>
                </i>
              </Link>
            </div>
            <div className="col-9 mx-auto col-md-6 col-lg-4 link">
              <i className="fa fa-power-off" style={{ fontSize: "20px" }}>
                <span style={{ padding: "10px" }}>Log Out</span>
              </i>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
