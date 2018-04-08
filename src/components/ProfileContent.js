import React from 'react';
import profilePic from '../css/images/nm-portrait-04-ola160x240_2x.jpg';
import cherrySmProfile from '../css/images/dent-button-cherry-apple-active.png';

class ProfileContent extends React.Component {
    render() {
      var profileStyle = {
          fontFamily: "sans-serif",
          fontWeight: "bold",
          padding: 13,
          color: "blue",
          padding: 50
          };
        return (
          <div profileStyle>
            <h1>{this.props.name}</h1>
            <p className="onlineParts"><img className="cherrySmProfile" src={cherrySmProfile} alt="cherry" /></p>
            <p className="onlineParts">Online</p>
            <p>{this.props.email}</p>
            <p>{this.props.phone}</p>
            <p>{this.props.location}</p>
          </div>
        );
    }
}

export default ProfileContent;
