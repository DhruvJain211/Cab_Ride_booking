/* eslint-disable no-unused-vars */
import React, {useEffect} from "react"
import AOS from "aos";
import "aos/dist/aos.css";
import './App.css'

// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Contact from "./components/Contact/Contact";
import { Outlet } from "react-router";


const App = () => {
  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
    AOS.refresh(); 
  }, [])
  //init - initialize AOS. refresh - recalculate all offsets and positions of elements (called on window resize)

  return (
    <div className="dark:bg-dark dark:text-white">
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default App