import React from 'react'
import Logo from "../../images/logo.svg"
import HamburgerMenuIcon from "../../images/icon-menu.svg"
import "./index.scss"

const Menu = () => {
  return (
    <div className="menu">
      <img src={HamburgerMenuIcon} alt="Hamburger Menu" className="menu__hamburger" />
      <img className="menu__logo" alt="Sneakers Logo" src={Logo} />
      <ul className="menu__list">
        <li className="menu__item">
          <a href="#2" className="menu__item-link">Collections</a>
        </li>
        <li className="menu__item">
          <a href="#1" className="menu__item-link">Men</a>
        </li>
        <li className="menu__item">
          <a href="#4" className="menu__item-link">Women</a>
        </li>
        <li className="menu__item">
          <a href="#5" className="menu__item-link">About</a>
        </li>
        <li className="menu__item">
          <a href="#7" className="menu__item-link">Contact</a>
        </li>
      </ul>
    </div>
  )
}

export default Menu
