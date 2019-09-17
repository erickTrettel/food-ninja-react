import React from 'react'

function Navbar() {
  return (
    <div>
      <ul className="nav bg-dark justify-content-end">
        <li className="nav-item">
          <a className="nav-link text-white" href="/home">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white" href="/dashboard">Dashboard</a>
        </li>
        <li className="nav-item">
          <a className="nav-link text-white-50" href="/login">Login</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
