import React from 'react';

import Hero from '../components/home/Hero'
import Intro from '../components/home/Intro'
import Service from '../components/home/Service'
import Cta from '../components/home/Cta'
import Projects from '../components/home/Projects'
import Milestones from '../components/home/Milestones'
import Clients from '../components/home/Clients'

class Home extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Hero />
            <Intro />
            <Service />
            <Cta />
            <Projects />
            <Milestones />
            <Clients />
        </div>);
    }
}

export default Home;
