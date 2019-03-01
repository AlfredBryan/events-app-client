import React, { Component } from "react";
import axios from "axios";

import NavBar from "../NavBar/NavBar";
import "./User.css";
import Spinner from "../hoc/Spinner";

const apiURL = "https://events-apps.herokuapp.com/api/users/all";

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
    if (!users) {
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
              <h3>No Users Yet</h3>
            </div>
          </div>
        </div>
      );
    } else if (users < 1) {
      return <Spinner />;
    } else {
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
}

export default ListUser;
