import React, { Component } from 'react'
import Wizard from "../Wizard"

// Import function to require a user to be logged in to access this component
import withAuth from './withAuth'

class PrivateRoute extends Component {
  render(){
    return (
      <div>
        <Wizard />
      </div>
    )
  }
}
// Wrap export with "withAuth" to protect it, requiring a logged in user to access.
export default withAuth(PrivateRoute, 1)
