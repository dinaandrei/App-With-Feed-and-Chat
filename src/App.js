import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import { withRouter } from "react-router";

import Login from './pages/login';
import HomeUser from './pages/home-user';
import HomePage from './pages/home-notLogged';
import Register from './pages/register';

import './app.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/register" component={Register}/>
          <Route exact path="/home" component={HomeUser}/>
        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
