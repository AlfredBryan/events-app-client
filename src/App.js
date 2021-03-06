import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Default from "./components/hoc/Default";
import Home from "./components/Home/Home";
import ListUser from "./components/Users/ListUser";
import CreateEvent from "./components/Events/CreateEvent";
import Login from "./components/Users/Login";
import Register from "./components/Users/Register";
import Authenticate from "./components/hoc/WithAuth";
import ListUsers from "./components/UserEvent/ListUsers";
import UserEvent from "./components/UserEvent/UserEvent";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Switch>
          <Route exact path="/" component={Register} />
          <Route exact path="/login" component={Login} />
          <Authenticate>
            <Route exact path="/home" component={Home} />
            <Route exact path="/event/signup/:id" component={UserEvent} />
            <Route exact path="/users/view" component={ListUser} />
            <Route exact path="/create/event" component={CreateEvent} />
            <Route exact path="/signedup/:id" component={ListUsers} />
          </Authenticate>
          <Route component={Default} />
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
