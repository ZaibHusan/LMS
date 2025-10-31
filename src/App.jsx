import React, { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Createrlayout from './Mainpages/Creater/Createrlayout'
import Userlayout from './Mainpages/User/Userlayout'
import Coursespage from './Mainpages/User/Pages/Coursespage/Coursespage'
import Footer from './MainComponent/Footer/Footer'
import CourseList from './Mainpages/User/Pages/CourseList/CourseList'
import Ruser from './MainComponent/Ruser/Ruser'
import './App.css'  // <-- CSS for loader

export default function App() {
  const [loading, setLoading] = useState(true);

  const pagetop = () => {
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    pagetop();

    // simulate a delay (you can remove or replace with real data loading)
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="full-loader">
        <div className="loader">
          <p>Loading</p>
          <span></span>
        </div>
      </div>
    );
  }

  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Userlayout />} />
          <Route path="/course/:id" element={<Coursespage />} />
          <Route path="/courselist" element={<CourseList />} />
        </Route>

        <Route path="creater">
          <Route index element={<Createrlayout />} />
        </Route>

        <Route path="/Ruser" element={<Ruser />} />
      </Routes>
      <Footer />
    </>
  );
}
