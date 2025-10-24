import React, { useContext } from 'react'
import "./Container.css"
import Card from '../Components/Card/Card'
import { courseDataContext } from '../../../Appcontext/Coursecontainer';
import { Link } from 'react-router-dom';
export default function Container() {
  const { finalCourseData } = useContext(courseDataContext);
  return (
    <div className="Container">
      <div className="Container_card">
        {
          finalCourseData.map((course, index) => (
            index < 4 && <Card key={index} course={course} />
          ))

        }
      </div>
      <div className="Container_button">
        <Link to={"/courselist"} >
          <button>Show all courses</button></Link>
      </div>
    </div>
  )
}
