import React from 'react'
import "./Button.css"
import { assets } from '../../../../assets/assets'

export default function Button() {
  return (
  <div className="Button">
    <button>Get started</button>
    <button>Leran more <img src={assets.arrow_icon} alt="" /></button>
  </div>
  )
}
