import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import NavBar from "../NavBar/NavBar";
import "./Home.css";
import Spinner from "../hoc/Spinner";

class Home extends Component {
  state = {
    events: [],
    loading: true
  };

  logOut = () => {
    localStorage.removeItem("token");
    this.props.history.replace("/login");
  };

  componentDidMount() {
    axios.get("https://events-apps.herokuapp.com/api/events/all").then(res => {
      const events = res.data.slice(0, 6);
      const updatedEvents = events.map(event => {
        return {
          ...event
        };
      });
      this.setState({
        events: updatedEvents,
        loading: false
      });
    });
  }

  render() {
    let { events, loading } = this.state;

    if (loading) {
      return <Spinner />;
    }

    if (events.length === 0) {
      return (
        <div>
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
                    <span style={{ padding: "10px" }}>
                      View registered Users
                    </span>
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
            <div className="row">
              <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
                <h1 className="display-3">404</h1>
                <h2>No Events Yet</h2>
              </div>
            </div>
            <div className="home-foot"> </div>
          </div>
        </div>
      );
    } else {
    }
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
          <div className="row event-main" id="event-main">
            {events.map(event => (
              <div className="col-xs-9 col-md-6 col-lg-4 events" key={event.id}>
                <div className="d-flex">
                  <Link to={`/signedup/${event.id}`}>
                    <div>
                      <img
                        src={event.image}
                        className="img-responsive"
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
        </div>
        <div id="home-footer" className="home-footer">
          {" "}
        </div>
      </React.Fragment>
    );
  }
}

export default Home;
