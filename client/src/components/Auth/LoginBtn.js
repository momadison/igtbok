import React, { Component } from "react";

export default class LoginButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      type: this.props.type,
      url: ``
    }
  }

  componentDidMount() {
    const url = process.env.NODE_ENV === 'production'   // If production, use Heroku otherwise localhost
      ? `http://herokuapp.com/api/auth/${this.props.type}`
      : `http://localhost:3001/api/auth/${this.props.type}`
    this.setState({
      url: url
    })
  }

  render(){
    return(<a className='nav-link' href={this.state.url}>Login with {this.props.type}</a>)
  }
}
