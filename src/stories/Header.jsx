import React from 'react'
import logo from './assets/JustWatchLogo.png'
import './header.css'

export const Header = () => (
  <header>
    <div className="wrapper">
      <div>
        <img src={logo} alt="logo" />
      </div>
    </div>
  </header>
)
