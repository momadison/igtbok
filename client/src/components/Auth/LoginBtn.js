import React, { Component } from "react";
import { Link } from "react-router-dom"
import API from "../../utils/API";

export default class LoginButton extends Component {
  constructor(props){
    super(props)
    let isLive = false
    this.state = {
      type: this.props.type,
      url: isLive ? `https://igtbok-org.herokuapp.com/api/auth/${this.props.type}` : `http://localhost:3001/api/auth/${this.props.type}`
    }
  }

  componentDidMount() {
    API.getProductionStatus().then((res)=>{
      console.log(res.data)
      const url = res.data   // If production, use Heroku otherwise localhost
      ? `https://igtbok-org.herokuapp.com/api/auth/${this.props.type}`
      : `http://localhost:3001/api/auth/${this.props.type}`
      this.setState({
        url: url
      })
    })
  }

  render(){
    if(this.props.type === 'logout'){
      return(<a className='nav-link' href={this.state.url}>Logout</a>)
    }
    return(<a className='nav-link' href={this.state.url}>Login with {this.props.type}</a>)
  }
}
