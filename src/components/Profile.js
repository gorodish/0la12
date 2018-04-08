import React from 'react';
import ProfileImage from './ProfileImage';
import ProfileContent from './ProfileContent';
import ProfileHeadline from './ProfileHeadline';

class Profile extends React.Component {
    render() {
        return (
          <div className="feature">
              <ProfileHeadline {...this.props} />
              <ProfileImage {...this.props} />
              <ProfileContent {...this.props} />
              <button onClick={this.props.loadSampleUsers}>Load users</button>
          </div>
        );
    }
}

export default Profile;
