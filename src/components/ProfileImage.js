import React from 'react';
import profilePic from '../css/images/nm-portrait-04-ola160x240_2x.jpg';
import cherrySmProfile from '../css/images/dent-button-cherry-apple-active.png';

class ProfileImage extends React.Component {
    render() {
      var profileImageStyle = {
        height: 240,
        backgroundColor: this.props.color,
        marginTop: "50px"
      };
        return (
            <div style={profileImageStyle}>
              <img src={profilePic} id="profilePic" alt="User" />
            </div>
        );
    }
}

export default ProfileImage;
