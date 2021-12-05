import React, { Component } from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link, Redirect } from "react-router-dom";

import Login from "./components/login.component";
import SignUp from "./components/signup.component";
import Dashboard from "./components/dashboard";
import VideoGym from "./components/videoGym";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
      username: ""
    }
  }

  login = () => {
    this.setState({loggedIn: true});
    console.log("Logging in...");
  }

  nameChange = (name) => {
    this.setState({username: name});
  }

  render() {
    const {loggedIn} = this.state;
    return (<Router>
      <div className="App">

            <Switch>
                <Route
                  path='/'
                  exact
                  render={(props) => !loggedIn ? <Login login={this.login} nameChange={this.nameChange} {...props} /> : <Redirect to='/app' />}
                />
                <Route
                  path='/sign-in'
                  exact
                  render={(props) => !loggedIn ? <Login login={this.login} nameChange={this.nameChange} {...props} /> : <Redirect to='/app' />}
                />
                <Route
                  path='/sign-up'
                  exact
                  render={(props) => !loggedIn ? <SignUp {...props} /> : <Redirect to='/app' />}
                />
                <Route
                  path='/app'
                  exact
                  render={(props) => loggedIn ? <Dashboard username={this.state.username} {...props} /> : <Redirect to='/sign-in' />}
                />
                <Route
                  path='/gym'
                  exact
                  render={(props) => loggedIn ? <VideoGym username={this.state.username} {...props} /> : <Redirect to='/sign-in' />}
                />

            </Switch>

      </div></Router>
    );
  }

}

export default App;
