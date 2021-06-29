import React, { Component } from "react";
import { Switch, Route } from "react-router-dom";
import ForgotPassword from "./Screens/ForgotPassword/ForgotPassword";
import Registration from "./Screens/registration/registration";

export default class rootRoutes extends Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Registration} />
          <Route exact path="/forgotPasword" component={ForgotPassword} />
        </Switch>
      </div>
    );
  }
}
