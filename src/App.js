import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

import ApiHelpers from './utils/ApiHelpers';
import Landing from './Landing';
import Login from './login/Login';

export default class App extends Component {
  constructor(props) {
    super(props);

    //make helpers global
    window.apiHelpers = new ApiHelpers();
  }


  render() {
    return (
      <div>
          <Router>
            <Switch>
              <Route exact path='/' component={Landing} />
              <Route path='/login' component={Login} />
            </Switch>
          </Router>

          <ToastContainer hideProgressBar={true} removeCloseButton={true} />
      </div>
    );
  }
}
