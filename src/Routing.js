import React, { Component } from 'react';
import Home from './components/Home'
import Contact from './components/Contact'
import About from './components/About'
import Additional from './components/Additional'
import './App.css';
import {Router} from "@reach/router"


class Routing extends Component {
  render() {
    return (
      <div className="App">
    {/* this is wht we return with our router */}

      <Router>
            <Home path="/"/>
            
            <Contact path="/contact"/>
            
            <About path="/about"/>
            
            <Additional path="/additional"/>
      </Router>

          
      </div>
    );
  }
}

export default Routing;
