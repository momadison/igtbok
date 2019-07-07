import React, { Component } from "react";

const PORT = process.env.PORT || 3001

export default class LoginButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      type: this.props.type,
      url: ``
    }
  }

  componentDidMount() {
    console.log('this is mounted')
    const url = process.env.NODE_ENV === 'production' ? `http://herokuapp.com/api/auth/${this.props.type}` : `http://localhost:3001/api/auth/${this.props.type}`
    this.setState({
      url: url
    })
  }

  render(){
    return(<a href={this.state.url}>Login with {this.props.type}</a>)
  }
}
