import React from 'react';

import Header from '../components/contact/Header'
import Content from '../components/contact/Content'

class Contact extends React.Component {
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

export default Contact;
