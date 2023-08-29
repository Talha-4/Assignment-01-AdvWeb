import React from 'react'
import { NavLink } from 'react-router-dom'
import './../../css/style.css'
function Navbar() {
  return (
    <nav class='navbar bg-dark'>
        <div class="container">
             <h1 class='logo lg-heading text-light'>WT</h1>
             <ul class='nav-items'>
             <li className="nav-item"><NavLink to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
             </ul>
        </div>
    </nav>

  )
}

export default Navbar