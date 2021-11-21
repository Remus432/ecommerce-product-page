import React from 'react'
// Children Components
import Menu from "../Menu"
import Account from "../Account"
import CartModal from "../CartModal"
// Styling
import "./index.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <Menu />
        <Account />
      </div>
      <CartModal />
    </nav>
  )
}

export default Nav
