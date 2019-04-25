import React, { Component } from 'react';
import Routing from './Routing'

import { Link } from "@reach/router"
import { library } from '@fortawesome/fontawesome-svg-core'

import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
library.add(faStroopwafel)
class App extends Component {
  render() {
    return (
      <div className="App">


      <nav>
        <li>
          <Link to= "/">Home</Link>
          <br></br>
          <Link to= "/contact">Contact</Link>
          <br></br>
          <Link to= "/about">about</Link>
          <br></br>
          <Link to= "/additional">additional</Link>
        </li>

      </nav>
        
          <Routing/>
      </div>
    );
  }
}

export default App;
