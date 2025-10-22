import React from 'react'
import "./Cpc.css"
import { assets } from '../../../../assets/assets'
import CourseS from '../CourseS/CourseS'
import Preview from '../../../preview/preview'
export default function Cpc() {
    return (
        <div className="Cpc">
            <div className="Cpc_box">
                <div className="Cpc_box_left">
                    <div className="Cpc_box_left_part1">

                        <div className="Cpc_title">
                            <h1>Advanced Python Programming</h1>
                        </div>
                        <div className="Cpc_dec">
                            <p>Deep Dive into Python Programming
                                This course is designed for those who have a basic understanding of Python and want to take their skills to the next level. You will explore advanced topic</p>
                        </div>

                        <div className="Cpc_Rating">
                            <p>4</p>
                            <div className="Cpc_Rating_img">
                                <img src={assets.star} alt="" />
                                <img src={assets.star} alt="" />
                                <img src={assets.star} alt="" />
                                <img src={assets.star} alt="" />
                                <img src={assets.star} alt="" />
                            </div>
                            <p className='blow'>(4 ratings)</p>
                            <p>10 students</p>
                        </div>
                        <p>Cousre by <a href="">zaib</a></p>
                    </div>
                    <div className="structure">
                        <h2>Course Structure</h2>
                        <div className="Cpc_box_left_part2">
                            <CourseS />
                            <CourseS />
                        </div>
                    </div>
                    <div className="Cpc_decription">
                        <h2>Course Description</h2>
                        <div className="Cpc_decription_box">
                            <h2>Deep Dive into Python Programming</h2>
                            <p>
                                This course is designed for those who have a basic understanding of Python and want to take their skills to the next level. You will explore advanced topics such as decorators, generators, and context managers. By the end of this course, you will be able to write efficient and clean Python code, and understand how to leverage Python's powerful features for real-world applications.
                                <ul>
                                    <li>Master advanced data structures</li>
                                    <li>Work with libraries and frameworks</li>
                                    <li>Work with libraries and frameworks</li>
                                </ul>
                            </p>
                        </div>
                    </div>
                </div>
                <div className="Cpc_box_right">
                  <Preview />
                </div>
            </div>
        </div>
    )
}
