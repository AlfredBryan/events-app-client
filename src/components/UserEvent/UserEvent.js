import React, { Component } from "react";
import axios from "axios";

import NavBar from "../NavBar/NavBar";

const token = localStorage.getItem("token");
const apiURL = "http://localhost:4000/api/events";

class UserEvent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      eventId: this.props.match.params,
      name: "",
      address: "",
      phone: "",
      location: "",
      reason: "",
      errorMessage: ""
    };
  }

  parseJwt = token => {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };

  handleSubmit = e => {
    e.preventDefault();
    let user = this.parseJwt(token);
    let userId = user.id;
    let eventId = this.state.eventId;
    let id = eventId.id;
    let { name, address, phone, location, reason } = this.state;
    axios
      .post(`${apiURL}/${id}`, {
        userId,
        name,
        address,
        phone,
        location,
        reason
      })
      .then(res => {
        if (res.status === 201) {
          this.props.history.replace("/home");
        } else {
          this.setState({
            errorMessage: "User already signed up"
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
        <NavBar />
        <div className="wrapper">
          <div className="main-sign-up">
            <h3>Event Sign Up</h3>
            <p style={{ textAlign: "center" }}>{this.state.errorMessage}</p>
            <div className="form-container">
              <form encType="multipart/form-data" onSubmit={this.handleSubmit}>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">Name of User</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name.."
                      value={this.state.name}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="address">Address</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="address"
                      name="address"
                      placeholder="Your Address..."
                      value={this.state.address}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="phone">Phone Number</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      placeholder="Enter Phone Number..."
                      value={this.state.phone}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="location">Location</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="location"
                      name="location"
                      placeholder="Enter Location..."
                      value={this.state.location}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="reason">Reason for signup</label>
                  </div>
                  <div className="col-75">
                    <textarea
                      id="reason"
                      name="reason"
                      placeholder="Write something.."
                      style={{ height: "152px" }}
                      value={this.state.reason}
                      onChange={this.handleChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <input
                    onClick={this.handleSubmit}
                    type="submit"
                    value="Submit"
                  />
                </div>
              </form>
            </div>
          </div>
          <div className="footer" />
        </div>
      </React.Fragment>
    );
  }
}

export default UserEvent;
