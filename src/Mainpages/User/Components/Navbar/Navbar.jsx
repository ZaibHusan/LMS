import React, { useContext } from 'react'
import './Navbar.css'
import { assets } from '../../../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { courseDataContext } from '../../../../Appcontext/Coursecontainer'
export default function Navbar() {
  const {userData , setuserData} = useContext(courseDataContext)
 const {islogin,Username,Gmail} = userData;

 let navigation = useNavigate();

 function logout () {
  console.log("logout")
  setuserData({
    islogin: false,
  })
  navigation("/")
 }

 const becomeI = () =>{
  if(!islogin)
    alert("please Frist login then apply to become instructor")
 }
  return (
    <div className="Navbar">
      <div className="Navbar_box">
        <div className="Navbar_logo">
          <Link to={"/"} >  <img src={assets.logo} alt="" /></Link>
        </div>
        <div className="Navbar_button">
          <Link to={islogin?"/creater":"/"} onClick={becomeI}> <button>Become Instructor</button></Link>
         {islogin ? <Link  ><button onClick={logout}>logout</button></Link>:<Link to={"/Ruser"} ><button>sign in/up</button></Link>}
        </div>
      </div>
    </div>
  )
}
