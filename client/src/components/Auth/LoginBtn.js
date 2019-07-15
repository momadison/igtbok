import React, { Component } from "react";
import { Link } from "react-router-dom"
import API from "../../utils/API";

export default class LoginButton extends Component {
  constructor(props){
    super(props)
    this.state = {
      type: this.props.type,
      isLoading: true,
      isLive: '',
      url: ''
    }
  }

  componentDidMount() {
    API.getProductionStatus().then((res)=>{
      console.log(res.data)
      const url = res.data   // If production, use Heroku otherwise localhost
                  ? `/api/auth/${this.props.type}`
                  : `http://localhost:3001/api/auth/${this.props.type}`
      this.setState({
        isLoading: false,
        isLive: res.data,
        url: url
      })
    })
  }

  render(){
    if(this.state.isLoading){
      return(<h1>Loading...</h1>)
    }
    if(this.state.isLive){
      if(this.props.type === 'logout'){
        return(<Link className='nav-link' to={this.state.url}>Logout</Link>)
      }
      return(<Link className='nav-link' to={this.state.url}>Login with {this.props.type}</Link>)
    }
    if(this.props.type === 'logout'){
      return(<a className='nav-link' href={this.state.url}>Logout</a>)
    }
    return(<a className='nav-link' href={this.state.url}>Login with {this.props.type}</a>)
  }
}
