import React, { createContext, useEffect, useState } from 'react'
import courseData from './coursedata'
import { buyers } from './coursedata';


// Creating context for overall course data management

export const courseDataContext = createContext("");


export default function Coursecontainer({ children }) {
  const [finalCourseData, setFinalCourseData] = useState(courseData);
  const [title, setTitle] = useState("");

  const filterCourseFunction = () => {
    if (!title.trim()) {
      setFinalCourseData(courseData);
      return;
    }
    const filtered = courseData.filter((item) => {
      return item.title.toLowerCase().includes(title.toLowerCase());
    })
    setFinalCourseData(filtered);
  }

  useEffect(() => {
    filterCourseFunction();
  }, [title, courseData]);
  return (
    <div>
      <courseDataContext.Provider value={{ finalCourseData, title, setTitle,buyers }}>
        {children}
      </courseDataContext.Provider>
    </div>
  )
}
