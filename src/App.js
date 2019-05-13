import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import ApiHelpers from './utils/ApiHelpers';
import ClassComponent from './testClassComponent';

export default class App extends Component {
  constructor(props) {
    super(props);

    //make helpers global
    window.apiHelpers = new ApiHelpers();
  }


  render() {
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reloads.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
          <ClassComponent />
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
