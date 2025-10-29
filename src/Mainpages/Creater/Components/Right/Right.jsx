import React from 'react'
import MainDashbord from './MainDashbord'
import './Right.css'
import Mcourses from '../Mycourses/Mcourses'
import Addcourse from '../Addcourse/Addcourse'
import Enrole from '../Enrole/Enrole'
function Right({Currentpage}) {
  return (
    <div className="mainR">
      {Currentpage === "Dashbord" && <MainDashbord />}
      {Currentpage === "MyCourses" && <Mcourses />}
      {Currentpage === "AddCourse" && <Addcourse />}
      {Currentpage === "Enrole" && <Enrole />}
    </div>
  )
}

export default Right