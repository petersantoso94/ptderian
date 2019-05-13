import React from 'react';
import './App.css';
import {Users_API} from './utils/RequestService'

class testClassComponents extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date(), data: {}};
  }

  getRoles = async () => {
    await Users_API.getUsers({userID:'1153'})
        .then(resp => {
          console.log(resp);
        })
        .catch(er => {
            er = er ? er : "request failed!";
            console.error(er);
        });
}

  componentDidMount() {
    this.getRoles();
  }

  render() {
    return (<div>
      <h1>Hello, {this.state.data.name}</h1>
      <p></p>
    </div>);
  }
}

export default testClassComponents;
