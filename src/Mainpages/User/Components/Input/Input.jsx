import React, { useContext, useState } from 'react'
import "./Input.css"
import { assets } from '../../../../assets/assets'
import { Link, useNavigate } from 'react-router-dom'
import { courseDataContext } from '../../../../Appcontext/Coursecontainer';
export default function Input() {
  const [localInput, setlocalInput] = useState("");
  const { title, setTitle } = useContext(courseDataContext);
  const navigate = useNavigate();

  const setTitleOnSearch = () => {
    setTitle(localInput);
  }

  const handleFormSubmit = (e) => {
    if (e.key === 'Enter') {
      setTitleOnSearch();
      setlocalInput("");
      if(title.length>0){
        navigate("/courselist");
      }
    }
  }



  return (
    <div className="Input">
      <div className="Input_box">
        <img src={assets.search_icon} alt="" />
        <input type="text" placeholder='search for course'  onKeyDown={handleFormSubmit}  value={localInput}  onChange={(e) => setlocalInput(e.target.value)} />
        <form action={handleFormSubmit}></form>
        <Link to={`/courselist`} > <button type='submit' onClick={setTitleOnSearch} >Search</button></Link>
      </div>
    </div>
  )
}
