import React from 'react'
import './Navbar.css'
import { assets } from '../../../../assets/assets'
import { Link } from 'react-router-dom'
export default function Navbar() {
  return (
    <div className="Navbar">
        <div className="Navbar_box">
            <div className="Navbar_logo">
              <Link to={"/"} >  <img src={assets.logo} alt="" /></Link>
            </div>
            <div className="Navbar_button">
                <button>Become Instructor</button>
                <button>create Account</button>
            </div>
        </div>
    </div>
  )
}
