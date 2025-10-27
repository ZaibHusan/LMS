import React, { useContext } from 'react'
import "./Enrole.css"
import { assets } from '../../../../assets/assets'
import { courseDataContext } from '../../../../Appcontext/Coursecontainer'
export default function Enrole() {
    const { buyers } = useContext(courseDataContext)
    return (
        <div className="Enrole">
            <div className="Enrole_banner">
                <h2>Enrolled students list</h2>
                <p>The following are some studnets which had been enrolled with you</p>
                <div className="Enrole_number">
                    <p><span>.</span>30 students Enroled</p>
                    <p>Total Erning 30000$</p>
                </div>
            </div>
            <div className="Enrole_list">
                {buyers.map((buy, inxex) => {
                    return (
                        <ul key={inxex}>
                            <div className="profile">
                                <img src={assets.profile_img} alt="" />
                            </div>
                            <div className="Enrole_data">
                                <p>You enrolled in this course on 12 agust 2024</p>
                            </div>
                            <div className="Enrole_spending">
                                <p>$30</p>
                            </div>
                        </ul>
                    )
                })}

            </div>
        </div>
    )
}
