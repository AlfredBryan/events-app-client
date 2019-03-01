import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const apiURL = "https://events-apps.herokuapp.com/api/user/login";

class Login extends Component {
  constructor() {
    super();
    this.state = {
      email: "",
      password: "",
      errorMessage: ""
    };
  }

  handleSubmit = e => {
    e.preventDefault();
    let { email, password } = this.state;
    axios
      .post(`${apiURL}`, { email, password })
      .then(res => {
        if (res.status === 200) {
          localStorage.setItem("token", res.data.token);
          this.props.history.replace("/home");
        }
      })
      .catch(error => {
        if (error) {
          this.setState({
            errorMessage: "username or password incorrect"
          });
        }
      });
  };

  handleChange = e => {
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
              <img src="https://image.ibb.co/n7oTvU/logo_white.png" alt="" />
              <h3>Welcome</h3>
              <Link to="/" style={{ color: "white", textDecoration: "none" }}>
                Register
              </Link>
            </div>
            <div className="col-md-9 register-right">
              <h3 className="register-heading">Login</h3>
              <div className="row register-form">
                <div className="col-md-12 profile_card">
                  <form
                    onSubmit={this.handleSubmit}
                    encType="multipart/form-data"
                    className="form-inline"
                  >
                    <div className="form-group">
                      <i className="fa fa-envelope-o" />
                      <input
                        type="text"
                        name="email"
                        className="form-control"
                        placeholder="Email"
                        value={this.state.email}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="form-group">
                      <i className="fa fa-lock" />
                      <input
                        type="password"
                        name="password"
                        className="form-control"
                        placeholder="Password *"
                        value={this.state.password}
                        onChange={this.handleChange}
                      />
                    </div>
                    <div className="float-right">
                      <button
                        onClick={this.handleSubmit}
                        type="submit"
                        className="btn btn-primary"
                        value="Register"
                      >
                        Login
                      </button>
                    </div>
                  </form>
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

export default Login;
