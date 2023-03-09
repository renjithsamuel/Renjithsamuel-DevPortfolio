import React from 'react'
import './ProjectItem.css';
function ProjectItem(props) {

  // console.log(props);
  return (
    <div>
        <div className="projectItem">
          <div className="projectleft" style={{backgroundImage: `url(${props.projectItems.image})` }}>
                <a href={props.projectItems.gitlink}  target='_blank'>

                  <div className="projectname" style={{cursor:'pointer'}}>
                      {props.projectItems.name}
                  
                  </div>
                </a>
          </div>
          <div className="projectright" >
              <div className="projecttle">
                  {props.projectItems.title}
              </div>
              <div className="projectdesc">
                <div className="desctle">
                  Description 
                </div>
                  {props.projectItems.desc}

                  <div className="madewithcall">
                    Made with
                  </div>
                <div className="madewith">
                  {props.projectItems.madewith}
                  
                </div>
              </div>
          </div>
        </div>
    </div>
  )
}

export default ProjectItem;