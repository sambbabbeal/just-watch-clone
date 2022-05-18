import React from 'react'
import logo from './assets/JustWatchLogo.png'
import './header.css'
import { Link } from 'react-router-dom'

export const Header = () => (
  <header>
    <div className="wrapper">
      <div>
        <img src={logo} alt="logo" />
      </div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/users">Users</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)
