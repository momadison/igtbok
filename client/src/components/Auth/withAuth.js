import React from 'react'
import { Redirect } from 'react-router-dom'
import API from "../../utils/API";


export default function withAuth(WrappedComponent, security) {
  return class extends React.Component {
    constructor(props){
      super(props)
      this.state = {
        isUserLoggedIn: false,
        isLoading: true
      }
    }

    componentDidMount(){
      API.getAuth().then((res)=>{
        this.checkAuthentication(res.data)
      })
    }

    checkAuthentication = (data) => {
      if(data.status && data.security >= security){
        this.setState({
          isUserLoggedIn: true,
          isLoading: false
        })
      } else {
        this.setState({
          isUserLoggedIn: false,
          isLoading: false
        })
      }
    }

    render(){
      if(this.state.isLoading) return (<h1>Loading...</h1>)

      if(this.state.isUserLoggedIn){
        return <WrappedComponent authData={this.state} {...this.props} />
      } else {
        return <Redirect to={{pathname: "/Unauthorized", state: { from: this.props.location }}} />
      }
    }
  }
}
