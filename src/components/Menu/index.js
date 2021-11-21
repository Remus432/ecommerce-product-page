import React from 'react'
// Images
import Logo from "../../images/logo.svg"
// Icons
import HamburgerMenuIcon from "../../images/icon-menu.svg"
import MenuCloseIcon from "../../images/icon-close.svg"
// Styling
import "./index.scss"
// Redux
import { useDispatch, useSelector } from "react-redux"
import { toggleMenu, selectIsMenuOpen } from "../../features/menu/menuSlice"

const Menu = () => {
  const dispatch = useDispatch() 
  const isMenuOpen = useSelector(selectIsMenuOpen)

  const openMenu = () => {
    dispatch(toggleMenu())
  }

  const closeMenu = () => {
    dispatch(toggleMenu())
  }

  return (
    <div className="menu">
      <img onClick={() => openMenu()} src={HamburgerMenuIcon} alt="Hamburger Menu" className="menu__hamburger" />
      <img className="menu__logo" alt="Sneakers Logo" src={Logo} />
      {
        isMenuOpen && (
          <ul className="menu__list">
            <img onClick={() => closeMenu()} className="menu__close" src={MenuCloseIcon} alt="Menu Close Icon" />
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
        )
      }
    </div>
  )
}

export default Menu
