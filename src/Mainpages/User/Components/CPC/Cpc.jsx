import React, { use, useEffect, useState } from 'react'
import "./Cpc.css"
import { assets } from '../../../../assets/assets'
import CourseS from '../CourseS/CourseS'
import Preview from '../../../preview/preview'
import { useContext } from 'react'
import { courseDataContext } from '../../../../Appcontext/Coursecontainer'
import { useParams } from 'react-router-dom'
export default function Cpc() {
    const [productDetils, setproductDetils] = useState({});
    const { finalCourseData } = useContext(courseDataContext);
    const { id } = useParams();
    const [description, setDescription] = useState("");

    const pointoutproduct = async () => {
        const pointedProduct = finalCourseData.find((item) => { return item.id === parseInt(id) });
        setproductDetils(pointedProduct);
        setDescription(pointedProduct.description);

    }

    useEffect(() => {
        pointoutproduct();
    }, [id, finalCourseData]);


    const pagetop = () => {
        window.scrollTo(0, 0);
    }
    useEffect(() => {
        pagetop();
    }, []);

    return (
        <div className="Cpc">
            <div className="Cpc_box">
                <div className="Cpc_box_left">
                    <div className="Cpc_box_left_part1">

                        <div className="Cpc_title">
                            <h1>{productDetils.title}</h1>
                        </div>
                        <div className="Cpc_dec">
                            <p>{description && description.features.dec}</p>
                        </div>

                        <div className="Cpc_Rating">
                            <p>{productDetils.rating}</p>
                            <div className="Cpc_Rating_img">
                                {Array(5).fill(0).map((_, index) => (
                                    index < Math.floor(productDetils.rating) ? <img key={index} src={assets.star} alt="" /> : <img key={index} src={assets.star_blank} alt="" />
                                ))}
                            </div>
                            <p className='blow'>({productDetils.reviews} ratings)</p>
                            <p>{productDetils.students || 10} students</p>
                        </div>
                        <p>Cousre by <a href="">{productDetils.author}</a></p>
                    </div>
                    <div className="structure">
                        <h2>Course Structure</h2>
                        <div className="Cpc_box_left_part2">
                            {
                                productDetils.courseStructure && productDetils.courseStructure.map((section, index) => (
                                    <CourseS key={index} section={section} />
                                ))
                            }
                        </div>
                    </div>
                    <div className="Cpc_decription">
                        <h2>Course Description</h2>
                        <div className="Cpc_decription_box">
                            <h2>{description && description.features.title}</h2>
                            <p>
                                {description && description.features.dec}
                            </p>
                            <ul>
                                {description && description.features.points.map((point, index) => (
                                    <li key={index}>{point}</li>
                                ))}
                            </ul>

                        </div>
                    </div>
                </div>
                <div className="Cpc_box_right">
                    <Preview productDetils={productDetils} />
                </div>
            </div>
        </div>
    )
}
