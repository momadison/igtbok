import React, { Component } from "react";

export default class LoginButton extends Component {
  constructor(props){
    super(props)
    let isLive = false
    this.state = {
      type: this.props.type,
      url: isLive ? `https://igtbok-org.herokuapp.com//api/auth/${this.props.type}` : `http://localhost:3001/api/auth/${this.props.type}`
    }
  }

  // componentDidMount() {
  //   const url = process.env.NODE_ENV === 'production'   // If production, use Heroku otherwise localhost
  //     ? `${process.env.PUBLIC_URL}/api/auth/${this.props.type}`
  //     : `http://localhost:3001/api/auth/${this.props.type}`
  //   this.setState({
  //     url: url
  //   })
  // }

  render(){
    console.log(URL)
    console.log(process.env.PUBLIC_URL)
    return(<a className='nav-link' href={this.state.url}>Login with {this.props.type}</a>)
  }
}
