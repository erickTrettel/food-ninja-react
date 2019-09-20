import React, { Component } from 'react'
import Routes from './routes'

import Navbar from '../template/navbar'
import { default as localforage } from 'localforage'

class Main extends Component {
  componentWillMount() {
    localforage.config({
      name        : 'foodNinja',
      version     : 1.0,
      size        : 4980736, // Size of database, in bytes. WebSQL-only for now.
      storeName   : 'recipes' // Should be alphanumeric, with underscores.
    });
  }

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