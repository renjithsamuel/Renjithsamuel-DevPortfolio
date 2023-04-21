import React from 'react'
import './Works.css'
import ProjectItem from './ProjectItem'


export default function Works() {
  let projectItems = {
    LibraryHive : {
      key:1,
      image : 'https://i.ibb.co/tKjPRTv/Library-Hive.png',
      name : 'Library Hive' ,
      title : 'Library Management App',
      desc : "This project is a web application for managing a library of books. It allows users to search, sort, and filter books, and includes a pagination system to load additional books as the user scrolls.",
      madewith : "HTML",
      gitlink: 'https://github.com/renjithsamuel/LibraryManagement',
      livesite: 'https://libraryhive.vercel.app/#'
    },
    ExpenseMate : {
      key:2,
      image : 'https://i.ibb.co/MGLR70x/homepage.png',
      name : 'Expense Mate' ,
      title : 'Expense Tracker Website',
      desc : "This is a web application for tracking your expenses. It was created using HTML, CSS, and JavaScript for the front end, and Node.js, MongoDB, Express, and Mongoose for the backend. The user interface is designed to be simple, clean, and neat.",
      madewith : "NodeJS",
      gitlink:'https://github.com/renjithsamuel/ExpenseMate',
      livesite: 'https://renjithsamuel.github.io/ExpenseMate/'
    },
    OnYourMarks : {
      key:3,
      image : 'https://i.ibb.co/KLM6Pn4/On-Your-Markscover.jpg',
      name : 'On Your Marks' ,
      title : 'School Management App',
      desc : "An App that tracks real-time students learning’s outcomes and their academic progress across schools. Both Parents and Teachers can see the progress of students both in academics as well as in co-curricular activity",
      madewith : "Flutter",
      gitlink: 'https://github.com/renjithsamuel/Student_management_system'
    },
    LiveFuelUpdater : {
      key:4,
      image : 'https://i.ibb.co/fqDtTgq/fuelprice.jpg',
      name : 'Live Fuel Updater' ,
      title : 'Live Fuel Price Updater App',
      desc : "Using this web app, we can easily know the up-to-date fuel price in all the states in India. Our application fetches the latest fuel price across all the states in India and displays in the app. We developed this in HTML and CSS.",
      madewith : "Flask",
      gitlink: 'https://github.com/renjithsamuel/LiveFuelPriceUpdater'
    },


  }


  const projectItemArray = Object.values(projectItems).map((item) => (
    <ProjectItem projectItems={item} />
  ));
  return (
   
    <div className='Work' id='Work'>
       <div className='particles-container'>
      {/* <Particles options={options} init={particlesInit}/> */}
      </div>
      <div className="projectwrp">
      <div className="myworks">Works</div>
{
projectItemArray
}
      </div>
    </div>

  )
}

// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import { useCallback } from "react";
// const options = {
//   particles: {
//     number: {
//       value: 50,
//       density: {
//         enable: true,
//         area: 1000
//       }
//     },
//     color: {
//       value: ["#2EB67D", "#ECB22E", "#E01E5B", "#36C5F0"]
//     },
//     shape: {
//       type: "circle"
//     },
//     opacity: {
//       value: 0.3
//     },
//     size: {
//       value: { min: 1, max: 8 }
//     },
//     links: {
//       enable: true,
//       distance: 150,
//       color: "#808080",
//       opacity: 0.4,
//       width: 1
//     },
//     move: {
//       enable: true,
//       speed: 1,
//       direction: "none",
//       random: false,
//       straight: false,
//       outModes: "out"
//     }
//   },
//   interactivity: {
//     events: {
//       onHover: {
//         enable: true,
//         mode: "grab"
//       },
//       onClick: {
//         enable: true,
//         mode: "push"
//       }
//     },
//     modes: {
//       grab: {
//         distance: 140,
//         links: {
//           opacity: 1
//         }
//       },
//       push: {
//         quantity: 4
//       }
//     },
//     absorbers: [
//       {
//         position: { x: 50, y: 50 },
//         size: {
//           value: 50,
//           limit: 100,
//         }
//       }
//     ],


//   }
// };


 
// const particlesInit = useCallback(async (engine) => {
//   await loadFull(engine);
// }, []);