import React from 'react'
import "./Input.css"
import { assets } from '../../../../assets/assets'
import { Link } from 'react-router-dom'
export default function Input() {
  return (
  <div className="Input">
    <div className="Input_box">
        <img src={assets.search_icon} alt="" />
        <input type="text" placeholder='search for course' />
     <Link to={"/courselist"} > <button>Search</button></Link>
    </div>
  </div>
  )
}
