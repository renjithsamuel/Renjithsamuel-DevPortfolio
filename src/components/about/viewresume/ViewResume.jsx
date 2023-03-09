import React from 'react';
import './ViewResume.scss';
import resumePdf from '../../../assets/Renjiths Resume.pdf';

export default function ViewResume() {
  return (
    
      <div className="viewresume">
        <div className="rwrapper">
          <div className="rsocial">
            <span style={{color:"black"}}>View Resume</span>
            <div className="rsocial-links">
              <a href={resumePdf} target={'_blank'}><i className="fa fa-download" aria-hidden="true"></i></a>
            </div>
          </div>
        </div>
      </div>
  )
}
