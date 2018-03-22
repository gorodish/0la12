import React from 'react';
import profilePic from '../css/images/nm-portrait-04-ola160x240_2x.jpg';
import cherrySmProfile from '../css/images/dent-button-cherry-apple-active.png';

class ProfileImage extends React.Component {
    render() {
        return (
          <div className="profileWrapper">
            <div className="picTitle">
              <h1>Bob Smith</h1>
            </div>
            <div className="profilePic">
              <img src={profilePic} id="profilePic" alt="User" />
            </div>
            <div className="online">
              <p className="onlineParts"><img className="cherrySmProfile" src={cherrySmProfile} alt="cherry" /></p>
              <p className="onlineParts">Online</p>
            </div>
          </div>
        );
    }
}

export default ProfileImage;
