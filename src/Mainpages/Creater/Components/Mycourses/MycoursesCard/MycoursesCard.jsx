import React from 'react'
import { assets } from '../../../../../assets/assets'
import './MycoursesCard.css'
export default function MycoursesCard() {
  return (
    <div className="MycoursesCards">
         <div className="Card_profile">
            <img src={assets.course_1_thumbnail} alt="" />
            <h2>This is the title of the coure</h2>
         </div>
            <div className="Card_details">
                <p>Rating: 0</p>
                <p>Students Enrolled: 0</p>
                <p>Revenue Generated: $0</p>
                <p>Lessons: 0</p>
            </div>
    </div>
  )
}
