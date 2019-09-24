import React from 'react'
import {
  Route,
  Redirect
} from 'react-router-dom'
import { connect } from 'react-redux'

class PrivateRoute extends React.Component {  
  render() {
    const { component: Component } = this.props
    return (
      <Route {...this.props.rest} render={(props) => (
        this.props.auth.isAuthenticated
          ? <Component {...props} /> 
          : <Redirect to="/login" />
      )} />
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps)(PrivateRoute)
