import React, { use, useContext, useEffect, useRef, useState } from 'react'
import "./Ruser.css"
import Navbar from '../../Mainpages/User/Components/Navbar/Navbar'
import { useNavigate } from 'react-router-dom'
import { courseDataContext } from '../../Appcontext/Coursecontainer';
export default function Ruser() {
    let navigate = useNavigate();
    const [userstatus, setsuerstatus] = useState(false)
    const [error, seterror] = useState('')
    const { userData, setuserData, buttonshow, setbuttonshow } = useContext(courseDataContext)
    const btnref = useRef();

    // lets make a use effect for the buttton showing and hidding 




    const [showp, setshowp] = useState(true)
    const [Data, setData] = useState({
        username: '',
        password: '',
        email: "",
    })


    const handlechange = (e) => {
        const { name, value } = e.target;
        setData(pervious => ({
            ...pervious,
            [name]: value,


        }))
    }




    async function submitData(params) {
        console.log("button was clicked")
        setbuttonshow(false)
        // create a api for sign up
        if (!userstatus) {
            let req = await fetch("https://lms-back-end-mu.vercel.app/registeruser", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(Data)
            })
            let reqData = await req.json();
            setbuttonshow(true)
            const { islogin, data } = reqData;
            console.log("islogin ", islogin, "data", data)
            if (islogin) {
                setuserData({
                    islogin: true,
                    Username: data.username,
                    Gmail: data.email,
                })
                navigate("/")
                seterror("")
                console.log(userData)
            }
            if (!islogin) {
                setuserData({
                    islogin: false,
                })
                console.log(userData)
                seterror(`${data} please enter unique info`)
            }

        }


        // Create another api for login

        if (userstatus) {
            let req = await fetch("https://lms-back-end-mu.vercel.app/checkuser", {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    email: Data.email,
                    password: Data.password
                })
            })
            let reqData = await req.json();
            setbuttonshow(true)
            const { loginsuccess } = reqData;
            if (loginsuccess) {
                const { data } = reqData;
                setuserData({
                    islogin: true,
                    Username: data.username,
                    Gmail: data.email,
                })
                navigate("/")
                seterror("")
                console.log(userData)
            } else {

                setuserData({
                    islogin: false,
                })
                console.log(userData)
                seterror("The user not exist please enter correct information")
            }
        }


    }

    const Handlesubmit = (e) => {
        e.preventDefault()
    }
    return (
        <>
            <div className="Ruser">
                <div className="Register_box">
                    <div className="inner_form">
                        <h2>{userstatus ? "Sign up" : "Sign in"}</h2>
                        <form onSubmit={Handlesubmit}>
                            {!userstatus && <input type="text" placeholder='Name' name='username' value={Data.username} onChange={handlechange} />}
                            <input type="email" placeholder='Email' name='email' value={Data.email} onChange={handlechange} />
                            <input type="password" placeholder='Password' name='password' value={Data.password} onChange={handlechange} />
                            <p>if you {userstatus ? "have" : "don't have"} an account click here <button id='toggleButton' type='button' onClick={() => { setsuerstatus(!userstatus) }}>Sign in</button></p>
                            {error.length > 10 ? <p className='redp'>{error}</p> : ""}
                            {buttonshow ? <button type='submit' onClick={submitData} >{userstatus ? "Sign up" : "Sign in"}</button> : <div style={{backgroundColor:'darkblue'}} className="loader"><p>Loading</p><span></span></div>
                            }
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}
