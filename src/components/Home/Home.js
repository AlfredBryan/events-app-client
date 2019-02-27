import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

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
    axios.get("http://localhost:4000/api/events/all").then(res => {
      const events = res.data.slice(0, 6);
      const updatedEvents = events.map(event => {
        return {
          ...event
        };
      });
      this.setState({
        events: updatedEvents
      });
    });
  }

  render() {
    let { events } = this.state;

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
          <div className="row event-main">
            {events.map(event => (
              <div
                className="col-9 mx-auto col-md-6 col-lg-4 events"
                key={event.id}
              >
                <div className="d-flex">
                  <Link to={`/signedup/${event.id}`}>
                    <div>
                      <img
                        src={event.image}
                        style={{ width: "145.51px", height: "185px" }}
                        alt="event"
                      />
                    </div>
                  </Link>
                  <div>
                    <div className="event-name">
                      <h5>{event.name}</h5>
                    </div>
                    <div className="description">
                      <h5>{event.description}</h5>{" "}
                      <Link to={`/event/signup/${event.id}`}>
                        <p>Follow the link to Signup</p>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="home-footer"> </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
