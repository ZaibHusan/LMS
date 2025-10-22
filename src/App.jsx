import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Createrlayout from './Mainpages/Creater/Createrlayout'
import Userlayout from './Mainpages/User/Userlayout'
import Coursespage from './Mainpages/User/Pages/Coursespage/Coursespage'
import Footer from './MainComponent/Footer/Footer'
import CourseList from './Mainpages/User/Pages/CourseList/CourseList'

export default function App() {
  return (
    <>
      <Routes>
        <Route path='/'>
          <Route index element={<Userlayout/>} />
          <Route path='/course/:id' element={<Coursespage/>} />
          <Route path='/courselist' element={<CourseList />} />
        </Route>
        <Route path='creater'>
          <Route index element={<Createrlayout />} />
        </Route>

      </Routes>
      <Footer />
    </>
  )
}
