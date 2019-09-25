import React from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { login } from '../auth/authActions'
import { Redirect } from 'react-router-dom';

class Login extends React.Component {
  handleSubmit = e => {
    e.preventDefault()

    const user = {
      email: e.target.email.value,
      password: e.target.password.value
    }

    this.props.login(user)
  }

  
  render() {
    const loginBoxStyles = {
      margin: '0 auto',
      width: '500px',
      maxWidth: '100%',
      background: '#fff',
      padding: '10px',
      marginTop: '10vh',
      borderRadius: '5px',
      boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)',
      transition: '0.3s'
    }

    if(this.props.auth.isAuthenticated) return <Redirect to="/" />

    return (
      <div className="login-box" style={loginBoxStyles}>
        <div className="login-title">
          <h4 style={{ textAlign: 'center', color: '#999' }}>Login</h4>
        </div>

        <form onSubmit={this.handleSubmit} style={{ textAlign: 'center' }}>
          <div className="add-recipe container section">
            <div className="input-field">
              <input placeholder="example@mail.com" id="email" type="email" className="validate" />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className="input-field">
              <input placeholder="******" id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
    
            <button type="submit" className="btn" style={{ backgroundColor: 'var(--title)' }}>
              Login
            </button>
          </div>
        </form>

      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    auth: state.auth
  }
}

const mapDispatchToProps = dispatch => {
  return bindActionCreators({ login }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
