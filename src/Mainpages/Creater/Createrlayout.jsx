import React, { useContext } from 'react'
import Navbar from '../User/Components/Navbar/Navbar'
import Dashbord from './Components/Dashbord/Dashbord'
import { courseDataContext } from '../../Appcontext/Coursecontainer';
import "./error.css"
export default function Createrlayout() {
  const { userData, setuserData } = useContext(courseDataContext)
  const { islogin, Username, Gmail } = userData;
  if (islogin) {
    return (
      <>
        <Navbar />
        <Dashbord />
      </>
    )
  }
  else {
    return (
      <>
        <Navbar />
        <div className="error-container">
          <div className="error-box">
            <h1 className="error-title">Access Denied 🚫</h1>
            <p className="error-message">
              You are not logged in. Please log in to continue exploring your dashboard.
            </p>
            <a href="/Ruser" className="login-btn">Login Now</a>

            <div className="hint">
              <p>Don’t have an account? <a href="/Ruser#signup" className="signup-link">Sign up</a></p>
            </div>
          </div>
        </div>
        
      </>
    )
  }
}
