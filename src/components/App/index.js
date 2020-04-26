import React, { PureComponent } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Login from "../Login";
import Dashboard from "../Dashboard";
import Theme from "../Theme";

class App extends PureComponent {
  render() {
   
    return (
      <Router>
        <Theme>
          <Switch>
            <Route path="/dashboard">
              <Dashboard />
            </Route>
            <Route path="/">
              <Login />
            </Route>
          </Switch>
        </Theme>
      </Router>
    );
  }
}

export default App;
