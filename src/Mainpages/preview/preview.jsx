import React from 'react'
import "./preview.css"
import { assets } from '../../assets/assets'

export default function preview() {
    return (
        <div className="Preview">
            <div className="Preview_box">
                <div className="Preview_thumbnial">
                    <img src={assets.course_1_thumbnail} alt="" />
                </div>
                <div className="Preview_detils">
                    <p> <img src={assets.time_left_clock_icon} alt="" />5 days left at this price!</p>
                    <div className="Preview_pricing">
                        <div className="DiscountP"><p>$79.99</p></div>
                        <div className="ActualP"><p>$99.99</p></div>
                        <div className="discount"><p>20% off</p></div>
                    </div>
                </div>
                <div className="buyNow"><button>Buy Now</button></div>
                <dl>
                    <dd>What's in the course?</dd>
                    <dt><span>.</span> Lifetime access with free updates.</dt>
                    <dt><span>.</span> Step-by-step, hands-on project guidance.</dt>
                    <dt><span>.</span> Downloadable resources and source code.</dt>
                    <dt><span>.</span> Quizzes to test your knowledge.</dt>
                    <dt><span>.</span> Certificate of completion.</dt>
                </dl>
            </div>
        </div>
    )
}
