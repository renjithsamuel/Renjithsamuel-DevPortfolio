import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
import StarfieldAnimation from "react-starfield-animation";
import './Home.css';
import Zoom from 'react-reveal/Zoom';
export default function Home() {

  return (
    

<div className="Homewrp">
      <div className='typewriter' id="Home">
            {/* <StarfieldAnimation
        style={{
          position: "fixed",
          width: "100vw",
          height: "130vh",
          top:"-50",
          left:"0",
          
          
        }}
        numParticles={300}
        particleSpeed={0}
        dx={0.000000001}
        dy={0.000000001}
      /> */}
        <div className='imtag' >I'm</div>
        <Typewriter className="typetag"
          options={{
            strings: ['Renjith Samuel', 'a Web Developer','a Full-Stack Developer'],
            typeSpeed:150,
            autoStart: true,
            loop: false,
            delay:80,
            pauseFor:2000,
  
          }}
        />
  

      </div>
</div>
  
  )
}
