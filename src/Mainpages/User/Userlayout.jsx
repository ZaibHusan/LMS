import React, { useEffect } from 'react'
import Navbar from './Components/Navbar/Navbar'
import Banner from './Components/Banner/Banner'
import Section from './Components/Section/Section'
import Container from './Container/Container'
import Testi from './Components/Testi/Testi'
import Button from './Components/Button/Button'
import Footer from '../../MainComponent/Footer/Footer'

export default function Userlayout() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }
  useEffect(() => {
    scrollToTop();
  }, []);
  return (
    <>
    <Navbar />
    <hr />
    <Banner />
    <Section h2={"Learn from the best"} p={"Discover our top-rated courses across various categories. From coding and design to business and wellness, our courses are crafted to deliver results."}/>
    <Container />
    <Section h2={"Testimonials"} p={"Hear from our learners as they share their journeys of transformation, success, and how our  platform has made a difference in their lives."} />
    <Testi />
    <Section p={"Incididunt sint fugiat pariatur cupidatat consectetur sit cillum anim id veniam aliqua proident excepteur commodo do ea."} h2={"Learn anything, anytime, anywhere"} />
    <Button />
    </>

  )
}
