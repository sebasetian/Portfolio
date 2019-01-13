import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import HomePage from './HomePage';
import NavBar from './HeaderComponent/NavBar';
import Footer from './FooterComponent/Footer'
import { Sticky } from 'semantic-ui-react'
class App extends Component {
    state = {}

    handleContextRef = contextRef => this.setState({ contextRef })
    render() {
        const { contextRef } = this.state
        return (
            <Router>
                <div ref ={this.handleContextRef}>
                    <NavBar />
                    
                    <Route name="home" exact path="/" component={HomePage} />
                    <Sticky context={contextRef}>
                        <Footer />
                    </Sticky>
                </div>
            </Router>
        )
    }
}
export default App;