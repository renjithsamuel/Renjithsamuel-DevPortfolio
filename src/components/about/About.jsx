import React from 'react'
import './About.css'
import ViewResume from './viewresume/ViewResume';

let About = () => {

  return (
      <div className="wrpabt" id="About">
        <div className="aboutwrap">
        {/* <a href='https://github.com/renjithsamuel'  target='_blank'> */}
          <div className='name' style={{cursor:'pointer'}}>Renjith Samuel</div>
          {/* </a> */}
            <div className='abtleft'>
            {/* <img src="https://i.ibb.co/SJXYz3q/Profile-Pic-aboutme.jpg" alt="Profile-Pic-aboutme" border="0" height='80vh' /> */}
            </div>

            <div className='abtright'>
              <div className="abtnew">
            <div className='Aboutmetle'>
                About Me
              </div>
                          <div className="abtabt">
                            Hello there! My name is Renjith Samuel and I am a passionate full-stack developer.
                            I am currently pursuing Computer Science Engineering at Bannari Amman Institute of Technology.
                            My journey in the world of technology has been full of exciting challenges, from learning C
                              programming to Reactjs.
                                                <div className='sepbetabt'>
                            
                                                </div>
                            I never thought I would enjoy the journey of problem-solving and learning new skills and technologies 
                            as much as I do now.
                            I consider myself as a curious learner, always in awe of every new thing I discover.
                            I believe that the road to mastering these skills is a lifelong adventure, and I
                            am ready to embrace it. Recently, I have been particularly interested in Nodejs and web development.
                            I am amazed by the power of these technologies and their ability to transform
                            the way we interact with the digital world. 
                          </div>

                          <div className="rview">
                            <ViewResume/>
                          </div>
                      </div>
            </div>
        </div>
      </div>
  )
}


export default About;