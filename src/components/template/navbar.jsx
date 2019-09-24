import React, { Component } from 'react'
import Sidebar from './sidebar'
import { Link } from 'react-router-dom'

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav className="z-depth-0">
          <div className="nav-wrapper container">
            <Link to="/">Food<span>Ninja</span></Link>
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
