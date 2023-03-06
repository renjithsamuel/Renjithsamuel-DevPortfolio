import React from 'react';
import Navbar from './navbar/Navbar';
import Home from './home/Home';
import About from './about/About';
import Works from './works/Works';
import Contact from './contact/Contact';
import Links from './links/Links';
import './portfolio.css';
// import ScrollAnimate from 'react-scroll-fade-animation';
import Zoom from 'react-reveal/Zoom';
// import Bounce from 'react-reveal/Bounce';
// import Reveal from 'react-reveal/Reveal';
export default function Portfolio() {
  return (
    <div className='allcontainer'>
      {/* <Zoom>   */}
        
        <Navbar id='Navbar' />
         <Home id="Home"/> 
        <About id="About"/> 
        <Works id="Work"/> 
         <Contact id="Contact"/>
        <Links/>
       
        {/* </Zoom> */}
    </div>
  )
}
