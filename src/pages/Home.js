import React from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../components/Header'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Header />
        </div>);
    }
}

export default Home;
