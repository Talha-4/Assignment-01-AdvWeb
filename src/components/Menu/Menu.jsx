import React from 'react'
import { NavLink } from 'react-router-dom'
import './../../css/style.css'

function Menu() {
  return (
    <header class='header'>
      <nav class='navbar'>
        <div class="container">
          <h1 class='logo lg-heading text-light'>WT</h1>
          <ul class='nav-items'>
            <li className="nav-item"><NavLink to="/">Home</NavLink></li>
            <li className="nav-item"><NavLink to="/about">About</NavLink></li>
            <li className="nav-item"><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </div>
      </nav>
      <div class="header-content">
        <h1 class='lg-heading text-light main-heading'>travel the world</h1>
        <p class='text-light'>travel the world, experience the greateness, it's the best gift given by nature</p>
        <a href="#" class='btn btn-primary text-red md-heading'>Explore Places</a>
      </div>
    </header>
  )
}

export default Menu