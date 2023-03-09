import React, { Component } from 'react'
import Typewriter from 'typewriter-effect';
import './Home.css';
export default function Home() {

  return (
    

<div className="Homewrp">
      <div className='typewriter' id="Home">
        <div className='imtag' >I'm</div>
        <Typewriter className="typetag"
          options={{
            strings: ['Renjith Samuel', 'a Web Developer','a Front-end Developer','a Back-end Developer'],
            typeSpeed:150,
            autoStart: true,
            loop: true,
            delay:80,
            pauseFor:300,
  
          }}
        />
      </div>
</div>
  
  )
}
