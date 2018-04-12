import React from 'react';
import profilePic from '../css/images/nm-portrait-04-ola160x240_2x.jpg';
import cherrySmProfile from '../css/images/dent-button-cherry-apple-active.png';

class ProfileContent extends React.Component {
    render() {
        return (
          <div className="profileWrapper">
            <span className="onlineParts"><img className="cherrySmProfile" src={cherrySmProfile} alt="cherry" /></span>
            <span className="online">Online</span>
            <p>{this.props.email}</p>
            <p>{this.props.phone}</p>
            <p>{this.props.location}</p>
          </div>
        );
    }
}

export default ProfileContent;
