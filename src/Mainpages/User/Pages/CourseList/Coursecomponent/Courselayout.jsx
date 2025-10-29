import React from 'react'
import './courselayout.css'
import { Link } from 'react-router-dom'
import Input from '../../../Components/Input/Input'
import { assets } from '../../../../../assets/assets'
import Card from '../../../Components/Card/Card'
import { useContext } from 'react'
import { courseDataContext } from '../../../../../Appcontext/Coursecontainer';
export default function Courselayout() {
    const { finalCourseData, title, setTitle } = useContext(courseDataContext);
const clearFilter = () => {
    setTitle("");
}


const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  React.useEffect(() => {
    scrollToTop();
  }, []);

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
                    <div className="Tag" onClick={clearFilter}>
                        <button><img src={assets.cross_icon} alt=""  />{title}</button>
                    </div>
                    <div className="all_course">
                        {
                            finalCourseData.map((course, index) => (
                                <Card key={index} course={course} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}
