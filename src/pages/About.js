import React from 'react';

import Header from '../components/about/Header'
import Intro from '../components/about/Intro'
import Testimonials from '../components/about/Testimonials'
import Team from '../components/about/Team'
import Promo from '../components/about/Promo'

class About extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Header />
            <Intro />
            <Testimonials />
            <Team />
            <Promo />
        </div>);
    }
}

export default About;
