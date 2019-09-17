import React from 'react'

function Login() {
  return (
    <div className="login-box">
      <p className="login-title">Login</p>

      <div className="login-form">
        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" className="form-control"/>
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" className="form-control"/>
        </div>

        <button type="button" className="btn btn-primary btn-block">
          Login
        </button>
      </div>
    </div>
  )
}

export default Login
