import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HomePage from './HomePage'
import NavBar from './HeaderComponent/NavBar'
import AboutPage from './About'
import ResumePage from './Resume'
import { TransitionGroup, CSSTransition } from "react-transition-group";
import '../Css/Main.css'
class App extends Component {
    state = {}
    handleContextRef = contextRef => this.setState({ contextRef })
    render() {
        const { contextRef } = this.state
        return (
            <Router>
                <Route
                    render={({ location }) => (
                        <div ref ={this.handleContextRef}>
                            <NavBar />
                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    classNames="fade"
                                    timeout={300}
                                >
                                    <Switch location={location}>
                                        <Route exact name="home"  path="/" component={HomePage} />
                                        <Route name="about" path='/about' component={AboutPage} />
                                        <Route name="resume" path='/resume' component={ResumePage} />
                                    </Switch>
                                </CSSTransition>
                            </TransitionGroup>
                            <NavBar />
                        </div>
                    )}
                    />
            </Router>
        )
    }
}
export default App;