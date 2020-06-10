import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './header.css'

import logoColor from '../../assets/images/common/logo-color.png'

class Header extends Component {
  render() {
    return (
      <header className='header'>
        <img src={logoColor} alt='Logo' />
        <ul>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <Link to='/about'>About Us</Link>
          </li>
          <li>
            <Link to='/blog'>Blog</Link>
          </li>
          <li>
            <Link to='/contact'>Contact Us</Link>
          </li>
        </ul>
      </header>
    )
  }
}

export default Header
