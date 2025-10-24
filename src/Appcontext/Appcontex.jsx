import { createContext } from "react"
import courseDataInitial from "./coursedata";
import { useState, useCallback, useEffect } from "react";

export const LMScontex = createContext();

export default function Appcontex({ children }) {
  const [Title, setTitle] = useState("")
  const [courses, setCourses] = useState(courseDataInitial)
  const [filteredCourses, setFilteredCourses] = useState(courseDataInitial)

  const filterCourses = useCallback(() => {
    if (!Title.trim()) {
      setFilteredCourses(courses)
      return
    }
    const filtered = courses.filter((item) => 
      item.title.toLowerCase().includes(Title.toLowerCase())
    )
    setFilteredCourses(filtered)
  }, [Title, courses])

  // Run filter when title changes
  useEffect(() => {
    filterCourses()
  }, [Title, filterCourses])

  const contextValue = {
    Title,
    setTitle,
    courses,
    setCourses,
    filteredCourses
  }

  return (
    <LMScontex.Provider value={contextValue}>
      {children}
    </LMScontex.Provider>
  )
}
