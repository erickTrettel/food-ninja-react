import React from 'react'

function Navbar() {
  return (
    <div>
      <ul class="nav bg-dark justify-content-end">
        <li class="nav-item">
          <a class="nav-link text-white" href="/home">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white" href="/dashboard">Dashboard</a>
        </li>
        <li class="nav-item">
          <a class="nav-link text-white-50" href="/login">Login</a>
        </li>
      </ul>
    </div>
  )
}

export default Navbar
