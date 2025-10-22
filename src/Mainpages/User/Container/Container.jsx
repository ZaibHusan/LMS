import React from 'react'
import "./Container.css"
import Card from '../Components/Card/Card'
export default function Container() {
  return (
   <div className="Container">
    <div className="Container_card">
        <Card />
        <Card />
        <Card />
        <Card />
    </div>
    <div className="Container_button">
        <button>Show all courses</button>
    </div>
   </div>
  )
}
