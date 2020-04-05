import React, { Component } from "react";
import './index.css';



// This component displays an artist statement, based
// on what image the user is hovering over. Each image has a
// corresponding "statement" listed in the relevant .json

// not using

export default class Statement extends Component {
  constructor(props){
    super(props);
    this.state = {

    }

  }


  render() {
    return (
      <div class="statement">
        <p>{this.props.parentState.currentStatement}</p>
              </div>
    );
  }
}

