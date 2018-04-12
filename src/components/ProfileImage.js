import React from 'react';
import profilePic from '../css/images/nm-portrait-04-ola160x240_2x.jpg';
import cherrySmProfile from '../css/images/dent-button-cherry-apple-active.png';

class ProfileImage extends React.Component {
    render() {
      var profileImageStyle = {
        display: 'grid',
        height: 240,
        width: '160px',
        marginTop: 0,
        object-fit: 'cover'
      };
        return (
            <div style={profileImageStyle}>
              <img src={profilePic} id="profilePic" alt="User" />
            </div>
        );
    }
}

export default ProfileImage;
