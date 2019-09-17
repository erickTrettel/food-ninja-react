import React from 'react'
import { BrowserRouter , Route, Switch, Redirect } from 'react-router-dom'
import Home from '../home/home'
import Dashboard from '../home/dashboard'
import Login from '../home/login'

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/login" component={Login} />
          <Redirect to="/dashboard"/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes
