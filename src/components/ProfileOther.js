import React from 'react';
import EditUserForm from './EditUserForm';
import AddUserForm from './AddUserForm';

class ProfileOther extends React.Component {
  state = {
    profileId: null
  };

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
            deleteUser={this.props.deleteUser}
          />
        ))}
        <AddUserForm addUser={this.props.addUser} />
        <button onClick={this.props.loadSampleUsers}>Load profiles</button>
      </div>
    );
  }
}

export default ProfileOther;
