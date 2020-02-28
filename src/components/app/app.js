import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Register from '../register';
import Login from '../login';
import CV from '../cv';

export default class App extends Component {
    searchStyle = {
        fontSize: "22px",
        padding: "10px"
    };

    render() {
        return (
            <div>
                <Router>
                    <Link to="/register" className="btn-link" style={this.searchStyle}>Register</Link>
                    <Link to="/login" className="btn-link" style={this.searchStyle}>Login</Link>
                    <Link to="/cv" className="btn-link" style={this.searchStyle}>CV</Link>

                    <Route path="/" exact component={Login} />
                    <Route path="/register" component={Register} />
                    <Route path="/login" component={Login} />
                    <Route path="/cv" component={CV} />
                </Router>
            </div>
        );
    }
}