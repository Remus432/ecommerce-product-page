import React from 'react'
import Menu from "../Menu"
import Account from "../Account"
import "./index.scss";

const Nav = () => {
  return (
    <nav className="nav">
      <div className="nav-wrapper">
        <Menu />
        <Account />
      </div>
    </nav>
  )
}

export default Nav
