import React from 'react';
import { Redirect } from 'react-router-dom';

import '../App.css';
import { Users_API } from '../utils/RequestService'
import Loader from '../components/loader/Loader';

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 
      date: new Date(), 
      data: [] , 
      showLoader: true, 
      isAuthentificated: !window.apiHelpers.isTokenEmpty()};
  }

  logout = () => {
    this.setState({showLoader: true});
    window.apiHelpers.deleteAccessToken();
    window.apiHelpers.removeAllCookies();
    window.location.reload(true);
  }

  getRoles = async () => {
    await Users_API.getUsers({ userID: '1153' })
      .then(resp => {
        if (!resp) return;
        this.setState({ data: resp , showLoader: false});
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
    var showUser = [], { data, showLoader } = this.state, counter = 0;
    if (!this.state.isAuthentificated) {
        return <Redirect to={{
            pathname: '/login'
        }} />;
    }
    if (!data) showUser.push(<h1>Hello!</h1>)
    if(showLoader) return <Loader />

    data.forEach(element => {
      showUser.push(<h1 key={counter}>Hello, {element.name}</h1>);
      counter++;
    });
    return (<div>
      {showUser}
      <button onClick={this.logout}>
        Logout
      </button>
    </div>);
  }
}

export default Home;
