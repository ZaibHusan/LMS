import React, { useEffect } from 'react'
import Navbar from '../../Components/Navbar/Navbar'
import Cpc from '../../Components/CPC/Cpc'

export default function Coursespage() {
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
      <Cpc />
    </>
  )
}
