import react, { Component } from 'react'
import {BrowserRouter as Router, Route, Link, Redirect, withRouter} from 'react-router-dom'
import axios from 'axios'

const PORT = process.env.PORT || 3001

const checkAuth = {
  axios.get(`localhost:${PORT}/checkAuth`).then(function(res){
    console.log(res)
  })
}


export default class PrivateRoute extends Component = {
  render(){
    if(checkAuth()){
      return(<div>Testing Authenticated Route</div>)
    } else {
      return(<div>Testing Un-Authenticated Route</div>)
    }
  }
}
