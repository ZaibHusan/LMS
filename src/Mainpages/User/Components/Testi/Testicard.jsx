import React from 'react'
import "./Testis.css"
import { assets } from '../../../../assets/assets'
export default function Testicard() {
    return (
        <div className="Testicard">
            <div className="Testicard_profile">
                <img src={assets.profile_img} alt="" />
                <div className="Testicard_name">
                    <p>John Doe</p>
                    <p>Web Developer</p>
                </div>
            </div>
            <div className="Testicard_details">
                <div className="testicard_rating">
                    <img  className='img' src={assets.star} alt="" />
                    <img className='img' src={assets.star} alt="" />
                    <img className='img' src={assets.star} alt="" />
                    <img className='img' src={assets.star} alt="" />
                    <img className='img' src={assets.star} alt="" />
                </div>
                <p>I've been using Imagify for nearly two years, primarily for Instagram, and it has been incredibly user-friendly, making my work much easier.</p>
                <a href="">See more</a>
            </div>
        </div>
    )
}
