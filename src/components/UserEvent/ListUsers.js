import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import "./UserE.css";
import NavBar from "../NavBar/NavBar";
import Spinner from "../hoc/Spinner";

const apiURL = "https://events-apps.herokuapp.com/api/events";

class ListUsers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: this.props.match.params,
      users: []
    };
  }

  componentDidMount() {
    let eventId = this.state.eventId;
    let id = eventId.id;
    axios.get(`${apiURL}/${id}`).then(res => {
      this.setState({
        users: res.data.Users
      });
    });
  }

  render() {
    let { users } = this.state;
    let { eventId } = this.state;
    let id = eventId.id;
    if (users < 1) {
      return <Spinner />;
    } else if (!users) {
      return (
        <React.Fragment>
          <NavBar />
          <div className="container none-yet">
            <div className="row">
              <div className="col-10 mx-auto text-center text-title pt-5">
                <h2>No SignUp to Event Yet</h2>
                <Link to={`/event/signup/${id}`}>
                  <p>click to signup for event</p>
                </Link>
              </div>
            </div>
          </div>
        </React.Fragment>
      );
    } else {
      return (
        <React.Fragment>
          <NavBar />
          <div className="user-main links">
            <div className="container">
              <h5>Users Signed Up to Event</h5>
              <Link to={`/event/signup/${id}`}>
                <p>click to signup for event</p>
              </Link>
              {users.map(user => (
                <div key={user.id} className="d-flex wrap">
                  <p className="fname">{user.firstName}</p>
                  <p className="lname">{user.lastName}</p>
                </div>
              ))}
            </div>
          </div>
        </React.Fragment>
      );
    }
  }
}

export default ListUsers;
