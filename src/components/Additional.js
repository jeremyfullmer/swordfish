import React, { Component } from 'react';
import '../App.css';

class Additional extends Component {
  // it defines greeting on line 7 it does this whenever its told. thanks is the function.
  // get our string on line 12. call our function on line 25.
  Greeting = 'farewell'
  // the function on line 9 produces a js string says thanks for visiting.
  thanks = () => {

    return(
      <>
      {/*  greeting being called from line 7 which is farewell. */}
      <h1>Thanks for visiting {this.Greeting}</h1>
      </>
    );
  }
  /* below an example of jsx funtion!! help. define function!! inside class above render. call function in the return. */
    // my fuction for handling the submit.
    handleSubmit = (event) => {
      // line 20 event is for preventing a default on the handle submit.
      event.preventDefault()
      alert('hi')

    }

  render() {
    return (
      <div>
        <h1> 
          Here is some additional information!!
        </h1> 
        {/* below the function is called from line 9 */}
        {this.thanks()}



{/* the word "this" is wher i call the func, for handlesubmit. is called within onsubmit foll
followed by handlesubmit */}
        <form onSubmit={(event)=>this.handleSubmit(event)}>
          <label>
            last Name:
            <input type="text" id="lastname" ></input>
            </label>
            <label>
            first Name:
            <input type="text" id="firstname" ></input>
            </label>
            <label>
            email:
            <input type="text" id="email" ></input>
          </label>
          <label>
            cell #:
            <input type="text" id="cellNumber" ></input>
          </label><br></br>
          <input type="submit" value="Submit"></input>
          
        </form>

                
            
          </div>




      



    );
  }
}

export default Additional;
