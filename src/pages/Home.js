import React from 'react';

import Header from '../components/Header'
import Footer from '../components/Footer'
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
            <Header />
            <Hero />
            <Intro />
            <Service />
            <Cta />
            <Projects />
            <Milestones />
            <Clients />
            <Footer />
        </div>);
    }
}

export default Home;
