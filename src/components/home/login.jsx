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
    if(this.props.auth.isAuthenticated) return <Redirect to="/" />

    return (
      <div className="login-box">
        <div className="login-title">
          <h4 style={{ textAlign: 'center', color: '#999' }}>Login</h4>
        </div>

        <div className="divider"></div>

        <form onSubmit={this.handleSubmit}>
          <div className="add-recipe container section">
            <div className="input-field">
              <input placeholder="example@mail.com" id="email" type="email" className="validate" />
              <label htmlFor="email">E-mail</label>
            </div>

            <div className="input-field">
              <input placeholder="******" id="password" type="password" className="validate" />
              <label htmlFor="password">Password</label>
            </div>
    
            <button type="submit" className="btn btn-small">
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
