import React from 'react'
import './courselayout.css'
import { Link } from 'react-router-dom'
import Input from '../../../Components/Input/Input'
import { assets } from '../../../../../assets/assets'
import Card from '../../../Components/Card/Card'
export default function Courselayout() {
    return (
        <div className="Courselayout">
            <div className="courselayout_box">
                <div className="courselayout_part1">
                    <div className="courselayout_box1">
                        <h1>Course List</h1>
                        <p><Link to={'/'}>Home</Link> / Course List</p>
                    </div>
                    <div className="courselayout_box2">
                        <Input />
                    </div>
                </div>
                <div className="courselayout_part2">
                  <div className="Tag">
                      <button><img src={assets.cross_icon} alt="" /> cybersecurity</button>
                      <button><img src={assets.cross_icon} alt="" /> cybersecurity</button>
                      <button><img src={assets.cross_icon} alt="" /> cybersecurity</button>
                  </div>
                    <div className="all_course">
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                  <Card />
                    </div>
                </div>
            </div>
        </div>
    )
}
