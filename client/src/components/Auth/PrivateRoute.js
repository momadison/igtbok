import React, { Component } from 'react'

// Import function to require a user to be logged in to access this component
import withAuth from './withAuth'

class PrivateRoute extends Component {
  render(){
    return (
      <div>
        <h1>This is a private route</h1>
      </div>
    )
  }
}
// Wrap export with "withAuth" to protect it, requiring a logged in user to access.
export default withAuth(PrivateRoute, 1)
