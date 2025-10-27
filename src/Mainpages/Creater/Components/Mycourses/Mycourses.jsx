import React from 'react'
import MycoursesCard from './MycoursesCard/MycoursesCard'
import './Mycourses.css'
import { assets } from '../../../../assets/assets'
export default function Mycourses() {
  return (
    <div className="Mycourses">
        <h1>My Courses</h1>
        <ul>
            <li>Total course : 0 <img src={assets.arrow_icon} alt="" /></li>
        </ul>
  <div className="Mycourses_allcourse">
          <MycoursesCard />
          <MycoursesCard />
          <MycoursesCard />
          <MycoursesCard />
          <MycoursesCard />
          <MycoursesCard />
          <MycoursesCard />
  </div>
    </div>
  )
}
