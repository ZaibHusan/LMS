import React from 'react'
import MainDashbord from './MainDashbord'
import './Right.css'
import { Outlet } from 'react-router-dom'
import Mycourses from '../mycourses/mycourses'
import Addcourse from '../Addcourse/Addcourse'
import Enrole from '../Enrole/Enrole'
function Right({Currentpage, setCurrentpage}) {
  return (
    <div className="mainR">
      {Currentpage === "Dashbord" && <MainDashbord />}
      {Currentpage === "MyCourses" && <Mycourses />}
      {Currentpage === "AddCourse" && <Addcourse />}
      {Currentpage === "Enrole" && <Enrole />}
    </div>
  )
}

export default Right