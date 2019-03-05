import React, { Component } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

import "./User.css";

const apiURL = "https://events-apps.herokuapp.com/api/user/register";

class Register extends Component {
  state = {
    fullName: "",
    email: "",
    password: "",
    errorMessage: null
  };

  handleSubmit = e => {
    e.preventDefault();
    let { fullName, email, password } = this.state;

    axios
      .post(`${apiURL}`, {
        fullName,
        email,
        password
      })
      .then(res => {
        if (res.status === 200) {
          this.props.history.replace("/home");
        }
      })
      .catch(error => {
        if (error) {
          this.setState({
            errorMessage: "Error: confirm details and try again"
          });
        }
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
        <div className="container register">
          <div className="row">
            <div className="col-md-3 register-left">
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
            <div className="col-md-9 register-right">
              <h3 className="register-heading">Please Register</h3>
              <div className="row register-form">
                <div className="col-md-6">
                  <div className="form-group">
                    <input
                      type="text"
                      name="fullName"
                      className="form-control"
                      placeholder="Full Name *"
                      value={this.state.fullName}
                      onChange={this.handleTextChange}
                    />
                  </div>
                  <div className="form-group">
                    <input
                      type="email"
                      name="email"
                      className="form-control"
                      autoCapitalize="none"
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
          <p style={{ color: "white", fontSize: "20px" }}>
            {this.state.errorMessage}
          </p>
        </div>
      </React.Fragment>
    );
  }
}

export default Register;
