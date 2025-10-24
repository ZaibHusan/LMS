import React from 'react'
import "./CourseS.css"
import { assets } from '../../../../assets/assets'
import { useState } from 'react'
export default function CourseS({ section }) {
    const [Display, setDisplay] = useState(false)
    return (
        <div className="CourseS">
            <div onClick={() => {
                setDisplay(!Display)
            }} className="chepter">
                <div className="extra">
                    <img className={Display ? "" : 'red'} src={assets.down_arrow_icon} alt="" />
                    <h3>{section.sectionTitle.slice(0, 20)}</h3>
                </div>
                <p>2 lectures - 12 hours , 30 minutes</p>
            </div>
            {Display && <div className="lectures">
                {section.lectures.map((lecture, index) => {
                    return (
                        <div className="lecture">
                            <div className="play">
                                <img src={assets.play_icon} alt="" />
                                <p>{index + 1}. {lecture.lectureTitle.substring(0, 20)}</p>
                            </div>
                            <div className="time">
                                <button>{lecture.isFree ? "preview" : "paid"}</button>
                                <p>{lecture.duration_minutes} minutes</p>
                            </div>
                        </div>
                    )
                })}
            </div>
            }
        </div>
    )
}
