import React, { Component } from "react";
import axios from "axios";

export default class LoginButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      type: this.props.type
    }
  }

  handleClick = () => {
    axios.get(`/auth/${this.props.type}`)
  }

  render(){
    return(<a href={`localhost:3001/auth/${this.props.type}`}>Login with {this.props.type}</a>)
  }
  // render(){
  //   return(<button onClick={this.handleClick}>Login with {this.props.type}</button>)
  // }
}
