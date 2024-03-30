import React, { Component } from "react";
import Typewriter from "typewriter-effect";
import "./Home.css";
export default function Home() {
  return (
    <div className="Homewrp">
      <div className="typewriter" id="Home">
        <div className="imtag">I'm</div>
        <Typewriter
          className="typetag"
          options={{
            strings: [
              "Renjith Samuel",
              "a Web Developer",
              "a Front-end Developer",
              "a Back-end Developer",
            ],
            typeSpeed: 120,
            autoStart: true,
            loop: true,
            delay: 100,
            pauseFor: 500,
          }}
        />
      </div>
    </div>
  );
}
