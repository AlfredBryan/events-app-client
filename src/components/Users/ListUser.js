import React, { Component } from "react";
import axios from "axios";

import NavBar from "../NavBar/NavBar";
import "./User.css";
import Spinner from "../hoc/Spinner";

const apiURL = "https://events-apps.herokuapp.com/api/users/all";

class ListUser extends Component {
  state = {
    users: [],
    loading: true
  };

  componentDidMount() {
    axios
      .get(`${apiURL}`)
      .then(res => {
        this.setState({
          users: res.data,
          loading: false
        });
      })
      .catch(error => {
        throw error;
      });
  }

  render() {
    let { users, loading } = this.state;
    if (loading) {
      return <Spinner />;
    }
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
      return (
        <div className="container">
          <div className="row">
            <div className="col-10 mx-auto text-center text-title text-uppercase pt-5">
              <h3>No Users Yet</h3>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <React.Fragment>
          <NavBar />
          <div className="user-main">
            <h5>List of Registered Users</h5>
            {users.map(user => (
              <div key={user.id} className="wrap">
                <p className="fname">{user.fullName}</p>
              </div>
            ))}
          </div>
        </React.Fragment>
      );
    }
  }
}

export default ListUser;
