import React, { Component } from "react";
import { Redirect } from "react-router-dom";
import axios from "axios";

import NavBar from "../NavBar/NavBar";
import "./Event.css";

const token = localStorage.getItem("token");

class CreateEvent extends Component {
  state = {
    name: "",
    description: "",
    image: "",
    loading: false
  };

  handleImageChange = e => {
    e.preventDefault();
    let imageFile = e.target.files[0];
    this.setState({ [e.target.name]: imageFile });
  };

  handlTextChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  parseJwt = token => {
    if (!token) {
      return;
    }
    const base64Url = token.split(".")[1];
    const base64 = base64Url.replace("-", "+").replace("_", "/");
    return JSON.parse(window.atob(base64));
  };

  createEvent = e => {
    e.preventDefault();
    let user = this.parseJwt(token);
    let userId = user.id;
    const { name, description, image } = this.state;
    const formData = new FormData();
    formData.set("name", name);
    formData.set("userId", userId);
    formData.set("description", description);
    formData.append("image", image);
    axios({
      method: "post",
      url: "http://localhost:4000/api/events/add",
      data: formData,
      config: {
        headers: {
          "Content-Type": "multipart/form-data"
        }
      }
    }).then(res => {
      if (res.ok) {
        this.setState({
          loading: true
        });
      }
    });
  };
  render() {
    let userId = this.parseJwt(token);
    console.log(userId.id);
    return (
      <React.Fragment>
        <NavBar />
        <div className="wrapper">
          <div className="main-create">
            <h3>Create Event</h3>
            <div className="form-container">
              <form action="/action_page.php">
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="name">Name</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Your name.."
                      value={this.state.name}
                      onChange={this.handlTextChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="description">Description</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="text"
                      id="description"
                      name="description"
                      placeholder="Little Intro..."
                      value={this.state.description}
                      onChange={this.handlTextChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <div className="col-25">
                    <label htmlFor="image">Upload Image</label>
                  </div>
                  <div className="col-75">
                    <input
                      type="file"
                      id="image"
                      name="image"
                      onChange={this.handleImageChange}
                    />
                  </div>
                </div>
                <div className="row">
                  <input type="submit" value="Create Event" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default CreateEvent;
