import React from "react";

export default class Form extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        
      };
      this.uRef = React.createRef()
    }
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.uRef)
        let input = Object.values(this.uRef.current).find(val => val.name == 'egor')
        console.log(input)
        // console.log(`value: ${egor}`);
      }
      render(){
          return (
              <form ref={this.uRef} onSubmit={this.handleSubmit}>
                <ul>
                Enter your name
                <li><input type="text" name='egor' placeholder='Enter'/></li>
                <li><input type='checkbox' />You here?</li>
                <li><input type='radio' name="check" />Or here?</li>
                <li><input type='radio' name="check" />Or here?</li>
                <li><input type='submit' value="Click me"/></li>
                </ul>
                </form>
          )
      }
    }