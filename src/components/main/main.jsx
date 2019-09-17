import React, { Component } from 'react'
import Routes from './routes'

import Navbar from '../template/navbar'

class Main extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <div className="container">
          <Routes />
        </div>
      </div>
    )
  }
}

export default Main