import React, { Component } from "react";
import axios from "axios";
import { withRouter } from "react-router-dom";

class Authenticate extends Component {
  constructor(props) {
    super(props);
    this.state = {
      user: undefined
    };
  }

  componentDidMount() {
    const jwt = localStorage.getItem("token");
    if (!jwt) {
      this.props.history.push("/login");
    }
    axios
      .get("http://localhost:4000/api/getuser", {
        headers: { Authorization: `Bearer ${jwt}` }
      })
      .then(res => {
        this.setState({
          user: res.data
        });
      });
  }

  render() {
    if (this.state.user === undefined) {
      return (
        <div>
          <h1>Loading.....</h1>
        </div>
      );
    }
    return <div>{this.props.children}</div>;
  }
}

export default withRouter(Authenticate);
