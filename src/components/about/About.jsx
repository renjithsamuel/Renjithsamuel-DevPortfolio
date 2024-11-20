import React from "react";
import "./About.css";
import ViewResume from "./viewresume/ViewResume";

let About = () => {
  return (
    <div className="wrpabt" id="About">
      <div className="aboutwrap">
        {/* <a href='https://github.com/renjithsamuel'  target='_blank'> */}
        <div className="name" style={{ cursor: "pointer" }}>
          Renjith Samuel
        </div>
        {/* </a> */}
        <div className="abtleft">
          {/* <img src="https://i.ibb.co/SJXYz3q/Profile-Pic-aboutme.jpg" alt="Profile-Pic-aboutme" border="0" height='80vh' /> */}
        </div>

        <div className="abtright">
          <div className="abtnew">
            <div className="Aboutmetle">About Me</div>
            <div className="abtabt">
              {/* Para 1 */}
              Hi there! I'm <strong>Renjith Samuel</strong>, a dedicated
              Full-Stack Developer with over a year of experience building
              scalable, efficient, and user-friendly web applications. My
              expertise spans{" "}
              <strong>
                Golang, Next.js, PostgreSQL, and microservices architecture
              </strong>
              , with a strong focus on performance and reliability.
              <div className="sepbetabt"></div>
              {/* Para 2 */}
              I've contributed to impactful projects like{" "}
              <strong>eCommerce platforms</strong>
              and <strong>order management systems</strong>, solving complex
              challenges and delivering high-quality solutions. I believe in
              continuous learning, collaboration, and writing clean,
              maintainable code that drives meaningful results.
              <div className="sepbetabt"></div>
              {/* Para 3 */}
              Beyond development, I prioritize writing comprehensive tests to
              ensure quality and maintainability and have a proven track record
              of improving system performance and optimizing workflows. My goal
              is to build innovative solutions that not only meet business needs
              but also enhance user experience.
            </div>

            <div className="rview">
              <ViewResume />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default React.memo(About);
