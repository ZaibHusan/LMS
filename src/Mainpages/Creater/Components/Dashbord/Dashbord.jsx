import React, { useState } from 'react'
import './Dashbord.css'
import Left from '../Left/Left'
import Right from '../Right/Right'
export default function Dashbord() {
    const [Currentpage, setCurrentpage] = useState("Dashbord");
  return (
    <div className='Dashbord'>
        <Left setCurrentpage={setCurrentpage} />
        <Right Currentpage={Currentpage} setCurrentpage={setCurrentpage} />
    </div>
  )
}
