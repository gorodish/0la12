import React from 'react';
import AddUserForm from './AddUserForm';
import EditUserForm from './EditUserForm';
import Header from './Header';
import Footer from './Footer';
import Content from './Content';
import RightBox from './RightBox';
import FeatureBox from './FeatureBox';
import ProfileContent from './ProfileContent';
import sampleUsers from '../sample-users';

class ProfileOther extends React.Component {
  render() {
    return (
      <div className="profile">
        <p>Hello from the profile</p>
        {Object.keys(this.props.users).map(key => (
          <EditUserForm
            key={key}
            index={key}
            user={this.props.users[key]}
            updateUser={this.props.updateUser}
          />
        ))}

        <button onClick={this.props.loadSampleUsers}>Load profiles</button>
      </div>
    );
  }
}

export default ProfileOther;
