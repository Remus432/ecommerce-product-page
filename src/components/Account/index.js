import React from 'react'
import UserPic from "../../images/image-avatar.png"
import CartNotif from "../CartNotif"
import "./index.scss"

const Account = () => {
  return (
    <div className="account">
      <CartNotif />
      <img className="account__pic" src={UserPic} alt="User Avatar" />
    </div>
  )
}

export default Account
