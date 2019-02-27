import React, { Component } from "react";
import axios from "axios";

import NavBar from "../NavBar/NavBar";
import "./User.css";

const apiURL = "http://localhost:4000/api/users/all";

class ListUser extends Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios
      .get(`${apiURL}`)
      .then(res => {
        this.setState({
          users: res.data
        });
      })
      .catch(error => {
        throw error;
      });
  }

  render() {
    let { users } = this.state;
    return (
      <React.Fragment>
        <NavBar />
        <div className="user-main">
          <h5>List of Registered Users</h5>
          {users.map(user => (
            <div key={user.id} className="d-flex wrap">
              <p className="fname">{user.firstName}</p>
              <p className="lname">{user.lastName}</p>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}

export default ListUser;
