import React, { Component } from "react";
import axios from "axios";

const PORT = process.env.PORT || 3001

export default class LoginButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      type: this.props.type
    }
  }

  render(){
    return(<a href={`http://localhost:${PORT}/auth/${this.props.type}`}>Login with {this.props.type}</a>)
  }
}
