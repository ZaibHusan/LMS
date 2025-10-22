import React from 'react'
import "./Footer.css"
import { assets } from '../../assets/assets'

export default function Footer() {
    return (
        <div className="Footer">
            <div className="Footer_box">
                <div className="Footer_box1">
                    <img src={assets.logo} alt="" />
                    <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's</p>
                </div>
                <div className="Footer_box2">
                    <h2>Company</h2>
                    <ul>
                        <li>Home</li>
                        <li>About us</li>
                        <li>Contact</li>
                        <li>Blog</li>
                        <li>Privacy Policy</li>
                    </ul>
                </div>
                <div className="Footer_box3">
                    <h2>Subscribe to our newsletter</h2>
                    <p>The latest news, articles, and resources, sent to your </p>
                    <div className="Footer_input">
                        <input type="text" placeholder='Enter your Email' name="" id="" />
                        <button>Subscribe</button>
                    </div>
                </div>
            </div>
            <hr />
            <p>&copy; 2026 Zaib . All Rights Reserved</p>
        </div>
    )
}
