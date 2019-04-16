import React, { Component } from 'react';
import Routing from './Routing'
import './index.css';
import { Link } from "@reach/router"

class App extends Component {
  render() {
    return (
      <div className="App">
{/* ask about the stylesheet */}
<link
  rel="stylesheet"
  href="https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
  integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T"
  crossorigin="anonymous"
/>

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
