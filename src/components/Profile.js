import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileContent from './ProfileContent';

class Profile extends React.Component {
    render() {
      var profileStyle = {
        height: 200,
        width: 150,
        padding: 0,
        backgroundColor: "#FFF",
        WebkitFilter: "drop-shadow(0px 0px 5px #666)",
        filter: "drop-shadow(0px 0px 5px #666)"
};
        return (
            <div style={profileStyle}>
              <ProfileImage {...this.props} />
              <ProfileContent {...this.props} />
              <button onClick={this.props.loadSampleUsers}>Load users</button>
            </div>
        );
    }
}

export default Profile;
