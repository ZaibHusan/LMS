import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Courselayout from './Coursecomponent/Courselayout'

export default function CourseList() {
  const pagetop = () => {
    window.scrollTo(0, 0);
  }
  useEffect(() => {
    pagetop();
  }, []);
  return (
    <>
      <Navbar />
      <hr />
      <Courselayout />
    </>
  )
}
