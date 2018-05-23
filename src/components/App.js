import React from 'react';
import Footer from './Footer';
import Header from './Header';
import ProfileOther from './ProfileOther';
import PropTypes from 'prop-types';
import sampleUsers from '../sample-users';
import '../css/style.css';
import base from '../base';

class App extends React.Component {
  state = {
    users: {}
  };

  componentDidMount() {
    const { params } = this.props.match;
    this.ref = base.syncState(`${params.profileId}/users`, {
      context: this,
      state: 'users'
    });
  }

  addUser = user => {
    //take a copy
    const users = { ...this.state.users };
    //add new users
    users[`user$Date.now()}`] = user;
    //set new users obj to this.state.
    this.setState({ users });
  };

  updateUser = (key, updatedUser) => {
    //1. take a copy of the current state.
    const users = { ...this.state.users };
    //2. update  the state
    users[key] = updatedUser;
    //3. set it to state
    this.setState({ users });
  };

  static propTypes = {
    match: PropTypes.object
  };

  loadSampleUsers = () => {
    this.setState({ users: sampleUsers });
  };
  render() {
    return (
      <div className="wrapper">
        <div className="header">
          <Header />
        </div>

        <ProfileOther
          addUser={this.addUser}
          updateUser={this.updateUser}
          loadSampleUsers={this.loadSampleUsers}
          users={this.state.users}
          profileId={this.props.match.params.profileId}
          deleteUser={this.deleteUser}
        />
        <div className="sidebar" />
        <div className="footer">
          <Footer />
        </div>
      </div>
    );
  }
}

export default App;
