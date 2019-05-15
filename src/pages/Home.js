import React from 'react';
import { Redirect } from 'react-router-dom';

import Header from '../components/Header'
import Hero from '../components/Hero'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Header />
            <Hero />
        </div>);
    }
}

export default Home;
