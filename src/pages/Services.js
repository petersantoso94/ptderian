import React from 'react';

import Header from '../components/services/Header'
import Intro from '../components/services/Intro'
import Service from '../components/services/Service'
import Promo from '../components/services/Promo'

class Services extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Header />
            <Intro />
            <Service />
            <Promo />
        </div>);
    }
}

export default Services;
