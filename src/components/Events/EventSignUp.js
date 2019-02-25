import React from "react";

import NavBar from "../NavBar/NavBar";
import "./signUp.css";

const eventSignUp = props => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="wrapper">
        <div className="main-sign-up">
          <h3>Event Sign Up</h3>
          <div className="form-container">
            <form action="/action_page.php">
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
                  />
                </div>
              </div>
              <div className="row">
                <input type="submit" value="Submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default eventSignUp;
