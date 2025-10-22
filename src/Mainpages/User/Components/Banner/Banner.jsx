import React from 'react'
import "./Banner.css"
import { assets } from '../../../../assets/assets'
import Input from '../Input/Input'
export default function Banner() {
    return (
        <div className="Banner">
            <div className="Banner_box">
                <div className="Banner_txt">
                    <div className="Banner_main_txt">
                        <h1>Empower your future with the <br />courses designed to <span className="yellow">fit your choice.</span></h1>
                        <div className="sketch">
                            <img src={assets.sketch} alt="" />
                        </div>
                    </div>
                    <div className="Banner_txt_dec">
                        <p>We bring together world-class instructors, interactive content, and a supportive community to help you achieve your personal and professional goals.</p>
                    </div>
                     </div>
            <Input />
            <div className="Banner_last">
                <div className="Banner_last_p">
                    <p>Trusted by learners from</p>
                </div>
                <div className="Banner_list_companies">
                    <div className="company">
                        <img src={assets.accenture_logo} alt="" />
                    </div>
                    <div className="company">
                        <img src={assets.adobe_logo} alt="" />
                    </div>
                    <div className="company">
                        <img src={assets.walmart_logo} alt="" />
                    </div>
                    <div className="company">
                        <img src={assets.paypal_logo} alt="" />
                    </div>
                    <div className="company">
                        <img src={assets.microsoft_logo} alt="" />
                    </div>
                </div>
            </div>
            </div>
        </div>
    )
}
