import React from 'react'
import { BrowserRouter , Route, Switch, Redirect } from 'react-router-dom'
import Home from '../home/home'
import Contact from '../pages/contact'
import About from '../pages/about'

const Routes = () => {
  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/home" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/about" component={About} />
          <Redirect to="/home"/>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default Routes
