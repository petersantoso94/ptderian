import React from 'react';

import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import About from './pages/About'
import Services from './pages/Services'
import Portofolio from './pages/Portofolio'
import Contact from './pages/Contact'

class Landing extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            page: "home"
        }
    }

    componentDidUpdate() {
        window.pageLoader();
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
            case "services":
                renderContent = <Services />;
                break;
            case "portofolio":
                renderContent = <Portofolio />;
                break;
            case "contact":
                renderContent = <Contact />;
                break;
            default:
                renderContent = <Home />;
        }
        return (<div>
            <Header goToPages={this.goToPages} currentPage={this.state.page} />
                {renderContent}
            <Footer />
        </div>);
    }
}

export default Landing;
