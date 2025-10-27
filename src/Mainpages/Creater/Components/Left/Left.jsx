import React from 'react'
import './Left.css'
export default function Left({setCurrentpage}) {
  return (
    <div className='Left'>
      <ul>
        <li>
            <div className="dashbord" onClick={() => setCurrentpage("Dashbord")}>
                Dashbord
            </div>
        </li>
        <li>
            <div className="My-Courses" onClick={() => setCurrentpage("MyCourses")}>
                My Courses
            </div>
        </li>
        <li>
            <div className="Add_course" onClick={() => setCurrentpage("AddCourse")}>
                Add Course
            </div>
        </li>
        <li>
            <div className="Enrolled_students" onClick={() => setCurrentpage("Enrole")}>
                Enrolled Students
            </div>
        </li>
      </ul>
    </div>
  )
}
