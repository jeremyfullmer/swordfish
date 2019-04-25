import React, { Component } from 'react';
import '../App.css';

class Home extends Component {
  // the name is called at the top wher i want it.
  Name = 'Jeremy'

//   it puts the function in home class(begin function) TICK.
  tick = () => {
    setInterval(this.tick, 1000);
    return(
      
      <div>
        <h1>Hello, Swordfish!</h1>
        <h2>It is {new Date().toLocaleTimeString()}.</h2>
      </div>
      
    );
  }
  // end the function!!

// it starts another function!! NAME.
  myFunctiuon=()=>{
    return(
      <>
        <h1>Hi my name is {this.Name}</h1>
      </>
    );
  }

  // it ends another function NAME.
  


  
  
  
  render() {


    



    return (
      <div>

        <h1><u>My home page</u></h1>

        <p> Welcome to my site, it will be my pleasure to introduce to you, team swordfish and
          what we have accomplished as a team. In my experience,<br></br>
           i have accomplished a lot so far.
        </p>
        <p>
          Here is a list of what i have learned so far as a coding swordfish.
        </p>
        <ul>
          <li>visual studio code</li>
          <li>HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
          <li>React</li>
        </ul>
        

        <p><b><i>Here are the members of team swordfish coder champions !!</i></b></p>

  
    
        <p><font color="red">Here are our members</font></p>
        <table>
        <tr>
          <th>Person</th>
          <th>Where from.</th>
          <th>school</th>
        </tr>

        <tr>
          <td align="left">Jeremy</td>
          <td align="center">Sandy</td>
          <td align="right">Helio</td>
        </tr>
        <tr>
          <td align="left">Sandusky</td>
          <td align="center">Kentucky</td>
          <td align="right">Helio</td>
        </tr>
        <tr>
          <td align="left">Damon</td>
          <td align="center">Eightybrand</td>
          <td align="right">Helio</td>
        </tr>
        <tr>
          <td align="left">Mike </td>
          <td align="center">wj</td>
          <td align="right">Helio</td>
        </tr>
        <tr>
          <td align="left">Bryce</td>
          <td align="center">Alaska</td>
          <td align="right">Helio</td>
        </tr>
        <tr>
          <td align="left">Drew</td>
          <td align="center">Wisconsin</td>
          <td align="right">Helio</td>
        </tr>
        <tr>
          <td align="left"> Mike</td >
          <td align="center"> Los Angeles</td>
          <td align="right">Helio</td>
        </tr>

        </table>
        {/*  it calls the function where it wants it.!! */}
      {/*  and it calls it befor the end of the div!! */}
        {this.tick()}
        {this.myFunctiuon()}
        

  </div>
      
      
      
      
    );
  }
}

export default Home;
