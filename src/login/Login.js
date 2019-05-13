import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';

import { LoginLoader } from './../components/loader/Loader';
import './login.css';


export class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isAuthentificated: !window.apiHelpers.isTokenEmpty(),
            errorMessage: '',
            showLoader: false
        };

        this.username = null;
        this.password = null;
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ showLoader: true, errorMessage: '' });

        let data = { 'username': this.username.value, 'password': this.password.value };
        let url = 'http://localhost:3002/api/user/login';

        window.apiHelpers.sendRequest(url, data, 'POST')
            .then(resp => {
                if (!resp.access_token) {
                    throw "error";
                }
                window.apiHelpers.renewAccessToken(resp.access_token);
                this.setState({ 'isAuthentificated': true, showLoader: false });
            })
            .catch(err => {
                this.setState({ 'errorMessage': "Wrong credentials, please try again!!!", showLoader: false })
            });
    }


    render() {
        var loginLoader = null, er = null, {showLoader} = this.state;

        loginLoader = !showLoader ? <span>Sign In</span> : <LoginLoader />;
        er = this.state.errorMessage;

        if (this.state.isAuthentificated) {
            return <Redirect to={{
                pathname: '/'
            }} />;
        }

        return (
            <div className="login-wrap">

                <div className="logo-block">
                    <img src="images/logo-login.svg" alt="" />
                    <h2>Welcome to <span>Smite Backoffice</span></h2>
                </div>

                <div className="SignIn">
                    <form onSubmit={this.handleSubmit}>
                        <div className="SignIn-Item">
                            <p className="SignIn-Name">Account</p>
                            <input className="SignIn-Input" name="email" type="text" required ref={email => { this.username = email }} />
                        </div>

                        <div className="SignIn-Item">
                            <p className="SignIn-Name">Password</p>
                            <input className="SignIn-Input" name="password" type="password" required ref={name => { this.password = name }} />
                        </div>

                        <button className="SignIn-Button" >
                            {loginLoader}
                        </button>

                        {er ? <p className="error">{er}</p> : ''}
                    </form>
                </div>
            </div>

        )
    }
}

export default Login
