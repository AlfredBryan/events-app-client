import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./User.css";

const apiURL = "http://localhost:4000/api/user/register";

class Register extends Component {
  state = {
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConf: ""
  };

  handleSubmit = e => {
    e.preventDefault();
    let { firstName, lastName, email, password, passwordConf } = this.state;

    axios
      .post(`${apiURL}`, {
        firstName,
        lastName,
        email,
        password,
        passwordConf
      })
      .then(res => {
        console.log(res);
        this.props.history.replace("/login");
      })
      .catch(error => {
        console.log(error);
      });
  };

  handleTextChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  render() {
    return (
      <React.Fragment>
        <div class="container register">
          <div class="row">
            <div class="col-md-3 register-left">
              <img
                src="https://image.ibb.co/n7oTvU/logo_white.png"
                alt="login"
              />
              <h3>Welcome.</h3>
              <Link to="/login">
                {" "}
                <button style={{ fontWeight: "bold", background: "white" }}>
                  Login
                </button>{" "}
              </Link>
              <br />
            </div>
            <div class="col-md-9 register-right">
              <h3 class="register-heading">Please Register</h3>
              <div class="row register-form">
                <div class="col-md-6">
                  <div class="form-group">
                    <input
                      type="text"
                      name="firstName"
                      class="form-control"
                      placeholder="First Name *"
                      value={this.state.firstName}
                      onChange={this.handleTextChange}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="text"
                      name="lastName"
                      class="form-control"
                      placeholder="Last Name *"
                      value={this.state.lastName}
                      onChange={this.handleTextChange}
                    />
                  </div>
                  <div class="form-group">
                    <input
                      type="email"
                      name="email"
                      class="form-control"
                      placeholder="Email *"
                      value={this.state.email}
                      onChange={this.handleTextChange}
                    />
                  </div>
                </div>
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="password"
                      name="password"
                      className="form-control"
                      minLength="7"
                      maxLength="20"
                      placeholder="Password *"
                      value={this.state.password}
                      onChange={this.handleTextChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="password"
                      name="passwordConf"
                      className="form-control"
                      placeholder="Confirm Password *"
                      value={this.state.passwordConf}
                      onChange={this.handleTextChange}
                    />
                  </div>
                  <div className="form-group" />
                  <input
                    type="submit"
                    className="btnRegister"
                    value="Register"
                    onClick={this.handleSubmit}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
