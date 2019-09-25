import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { logout } from '../auth/authActions'
import { Link, Redirect } from 'react-router-dom'

const Sidebar = props => {
  return (
    <ul id="side-menu" className="sidenav side-menu">
      <li><a className="subheader">FOODNINJA</a></li>
      <li><a href="/" className="waves-effect">Home</a></li>
      <li><a href="/about" className="waves-effect">About</a></li>
      <li><div className="divider"></div></li>
      <li><a href="/contact" className="waves-effect">
        <i className="material-icons">mail_outline</i>Contact</a>
      </li>
      {
        props.auth.isAuthenticated ? (     
          <li><a className="waves-effect" onClick={() => {
            props.logout();
            return <Redirect to="/"/>
          }}>
            <i className="material-icons">power_settings_new</i>Logout</a>
          </li>
        ) : null
      }
    </ul>
  )
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ logout }, dispatch)
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
