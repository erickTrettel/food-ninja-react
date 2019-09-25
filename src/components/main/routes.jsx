import React from 'react'
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import Home from '../home/home'
import Contact from '../pages/contact'
import About from '../pages/about'
import Login from '../home/login'
import PrivateRoute from './privateRoute'
import Navbar from '../template/navbar'

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <div className="container">
          <Switch>
            <PrivateRoute path="/home" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/contact" component={Contact} />
            <Route path="/about" component={About} />
            <Redirect to="/home"/>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  )
}

export default Routes
