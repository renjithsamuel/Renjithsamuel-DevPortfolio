import React from "react";
import "./Works.css";
import ProjectItem from "./ProjectItem";

export default React.memo(function Works() {
  let projectItems = {
    IntegratedLibrary: {
      key: 7,
      image: "https://i.ibb.co/pjS9ntK/ILM-Dashboard.png",
      name: "Integrated Library",
      title: "Library Management Application",
      desc: `This application is made with NextJS, Typescript, Golang and
      PostgresSql, with an objective as to create a user friendly,
      automated typingless library manager.`,
      madewith: "NextJS/GoLang",
      gitlink: "https://github.com/renjithsamuel/ILM",
      livesite: "https://ilm-library-lemon.vercel.app/",
    },
    TaskReporter: {
      key: 7,
      image: "https://i.ibb.co/F5PspYJ/Screenshot-561.png",
      name: "Task Reporter",
      title: "Task Management Application",
      desc: "The application allows users to create and track multiple projects simultaneously, keeping track of their progress and syncing data dynamically when the device goes online after working offline.",
      madewith: "ReactJS/NodeJS",
      gitlink: "https://github.com/renjithsamuel/TaskReporter",
      livesite: "https://taskreporter.vercel.app",
    },
    Sudokio: {
      key: 6,
      image: "https://i.ibb.co/kXyZKFX/sudokio2.png",
      name: "Sudokio",
      title: "Sudoku online game",
      desc: "Sudokio is a web-based Sudoku game that allows you to play Sudoku, compete with other players, and track your scores. It provides easy Google Sign-In system, and various features to enhance your Sudoku experience.",
      madewith: "ReactJS/NodeJS",
      gitlink: "https://github.com/renjithsamuel/Sudokio_Online",
      livesite: "https://sudokio.vercel.app",
    },
    LeavePortal: {
      key: 5,
      image: "https://i.ibb.co/3RS1HZS/leave-portal.png",
      name: "Leave Portal",
      title: "Leave Portal App",
      desc: "This is a single page web application for managing a Leaves in an organisation. It allows users to apply leave , sort, and admins to approve it",
      madewith: "ReactJS/NodeJS",
      gitlink: "https://github.com/renjithsamuel/LeaveApprovalApp",
      livesite: "https://leaveportal.vercel.app/",
    },
    LibraryHive: {
      key: 4,
      image: "https://i.ibb.co/tKjPRTv/Library-Hive.png",
      name: "Library Hive",
      title: "Library Management App",
      desc: "This project is a web application for managing a library of books. It allows users to search, sort, and filter books, and includes a pagination system to load additional books as the user scrolls.",
      madewith: "HTML/NodeJS",
      gitlink: "https://github.com/renjithsamuel/LibraryManagement",
      livesite: "https://libraryhive.vercel.app/#",
    },
    ExpenseMate: {
      key: 3,
      image: "https://i.ibb.co/MGLR70x/homepage.png",
      name: "Expense Mate",
      title: "Expense Tracker Website",
      desc: "This is a web application for tracking your expenses. It was created using HTML, CSS, and JavaScript for the front end, and Node.js, MongoDB, Express, and Mongoose for the backend. The user interface is designed to be simple, clean, and neat.",
      madewith: "HTML/NodeJS",
      gitlink: "https://github.com/renjithsamuel/ExpenseMate",
      livesite: "https://expensemate.vercel.app",
    },
  };

  const projectItemArray = Object.values(projectItems).map((item) => (
    <ProjectItem projectItems={item} />
  ));
  return (
    <div className="Work" id="Work">
      <div className="particles-container">
        {/* <Particles options={options} init={particlesInit}/> */}
      </div>
      <div className="projectwrp">
        <div className="myworks">Works</div>
        {projectItemArray}
      </div>
    </div>
  );
});

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
