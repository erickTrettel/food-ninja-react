import React, { Component } from 'react'
import Sidebar from './sidebar'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="z-depth-0">
          <div className="nav-wrapper container">
            <a href="/">Food<span>Ninja</span></a>
            <span className="right grey-text text-darken-1">
              <i className="material-icons sidenav-trigger" 
                data-target="side-menu"
                style={{ cursor: 'pointer' }}>menu</i>
            </span>
          </div>
        </nav>
  
        <Sidebar />
      </div>
    )
  }
}

export default Navbar
