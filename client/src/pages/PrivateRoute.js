import React, { Component } from 'react'
import API from '../utils/API'

import withAuth from './withAuth'

class PrivateRoute extends Component {
  componentDidMount(){
    API.getAuth()
      .then(res => console.log(res))
  }
  render(){
    return (
      <div>
        <h1>This is a private route</h1>
      </div>
    )
  }
}

export default withAuth(PrivateRoute)
