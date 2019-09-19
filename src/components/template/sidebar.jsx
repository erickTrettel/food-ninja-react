import React from 'react'

function Sidebar() {
  return (
    <ul id="side-menu" className="sidenav side-menu">
      <li><a className="subheader">FOODNINJA</a></li>
      <li><a href="/" className="waves-effect">Home</a></li>
      <li><a href="/about" className="waves-effect">About</a></li>
      <li><div className="divider"></div></li>
      <li><a href="/contact" className="waves-effect">
        <i className="material-icons">mail_outline</i>Contact</a>
      </li>
    </ul>
  )
}

export default Sidebar
