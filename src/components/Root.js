import React from "react";
import { Provider } from "react-redux";
import App from "./App";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Root = ({ store }) => (
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path="/:filter?" component={App} />
      </Switch>
    </Router>
  </Provider>
);

export default Root;
