import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "home"
        }
    }

    componentDidUpdate(){
        window.pageFunction();
    }

    goToPages = (page_) => {
        this.setState({ page: page_ })
    }

    render() {
        var renderContent = <Home />;
        switch (this.state.page) {
            case "about":
                renderContent = <About />;
                break;
            default:
                renderContent = <Home />;
        }
        return (<div>
            <Header goToPages={this.goToPages}/>
                {renderContent}
            <Footer />
        </div>);
    }
}

export default Landing;
