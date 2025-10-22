import React from 'react'
import "./Card.css"
import { assets } from '../../../../assets/assets'
import { Link } from 'react-router-dom'
export default function Card() {
  return (
    <div className="Card">
        <div className="Card_Banner">
            <img src={assets.course_1_thumbnail} alt="" />
        </div>
        <div className="Card_detils">
            <div className="Card_title">Advanced Python Programming</div>
            <div className="Card_seller">by <span>John Doe</span></div>
            <div className="Card_rating">
                <span>4.5</span>
                <img src={assets.star} alt="" />
                <img src={assets.star} alt="" />
                <img src={assets.star} alt="" />
                <img src={assets.star} alt="" />
                <span>(1000)</span>
            </div>
            <div className="Card_pice_buy">
                <p>$79.99</p>
              <Link to={"/course/6"} > <button>Buy Now</button></Link>
            </div>
        </div>
    </div>
  )
}
