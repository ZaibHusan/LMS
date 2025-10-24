import React from 'react'
import "./Card.css"
import { assets } from '../../../../assets/assets'
import { Link } from 'react-router-dom'
export default function Card({ course }) {
  return (
    <div className="Card">
        <div className="Card_Banner">
            <img src={course.image} alt="" />
        </div>
        <div className="Card_detils">
            <div className="Card_title">{course.title}</div>
            <div className="Card_seller">by <span>{course.author}</span></div>
            <div className="Card_rating">
                <span>{course.rating}</span>
                {Array(5).fill(0).map((_, index) => (
                 index < Math.floor(course.rating) ?  <img key={index} src={assets.star} alt="" /> : <img key={index} src={assets.star_blank} alt="" />
                ))}
                <span>({course.reviews})</span>
            </div>
            <div className="Card_pice_buy">
                <p>${course.price}</p>
              <Link to={`/course/${course.id}`} > <button>Buy Now</button></Link>
            </div>
        </div>
    </div>
  )
}
