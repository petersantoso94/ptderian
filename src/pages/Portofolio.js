import React from 'react';

import Header from '../components/portofolio/Header'
import Content from '../components/portofolio/Content'

class Portofolio extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (<div>
            <Header />
            <Content />
        </div>);
    }
}

export default Portofolio;
