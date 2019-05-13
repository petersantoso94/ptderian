import React from 'react';
import '../App.css';
import { Users_API } from '../utils/RequestService'

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date(), data: [] };
  }

  getRoles = async () => {
    await Users_API.getUsers({ userID: '1153' })
      .then(resp => {
        if (!resp) return;
        this.setState({ data: resp });
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
    var showUser = [], { data } = this.state, counter = 0;
    if (!data) showUser.push(<h1>Hello!</h1>)

    data.forEach(element => {
      showUser.push(<h1 key={counter}>Hello, {element.name}</h1>);
      counter++;
    });
    return (<div>
      {showUser}
    </div>);
  }
}

export default Home;
