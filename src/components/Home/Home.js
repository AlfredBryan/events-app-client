import React, { Component } from "react";
import { Link } from "react-router-dom";

import NavBar from "../NavBar/NavBar";
import "./Home.css";

class Home extends Component {
  state = {
    events: []
  };

  logOut = () => {
    localStorage.removeItem("token");
    this.props.history.replace("/login");
  };

  componentDidMount() {
    
  }

  render() {
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
            <div
              className="col-9 mx-auto col-md-6 col-lg-4 link"
              onClick={this.logOut}
            >
              <i className="fa fa-power-off" style={{ fontSize: "20px" }}>
                <span style={{ padding: "10px" }}>Log Out</span>
              </i>
            </div>
          </div>
          <div className="row"></div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
