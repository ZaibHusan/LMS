import React from 'react'
import "./CourseS.css"
import { assets } from '../../../../assets/assets'
import { useState } from 'react'
export default function CourseS() {
    const [Display, setDisplay] = useState(false)
    return (
        <div className="CourseS">
            <div onClick={() => {
                setDisplay(!Display)
            }} className="chepter">
                <img className={Display ? "" : 'red'} src={assets.down_arrow_icon} alt="" />
                <h3>Advance data structure</h3>
                <p>2 lectures - 12 hours , 30 minutes</p>
            </div>
            {Display && <div className="lectures">
                <div className="lecture">
                 <div className="play">
                       <img src={assets.play_icon} alt="" />
                    <p>Lists and Tuples</p>
                 </div>
                    <div className="time">
                        <button>preview</button>
                        <p>12 hours</p>
                    </div>
                </div>
                <div className="lecture">
                 <div className="play">
                       <img src={assets.play_icon} alt="" />
                    <p>Lists and Tuples</p>
                 </div>
                    <div className="time">
                        <button>preview</button>
                        <p>12 hours</p>
                    </div>
                </div>
            </div>
             }
        </div>
    )
}
