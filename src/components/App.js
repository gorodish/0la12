import React from 'react';
import Footer from './Footer';
import FeatureBox from './FeatureBox';
import RightBox from './RightBox';
import Header from './Header';
import Content from './Content';
import ProfileOther from './ProfileOther';
import Home from './Home';
import AddUserForm from './AddUserForm';
import SearchResults from './SearchResults';
import ProfileContent from './ProfileContent';
import User from './User';
import PropTypes from 'prop-types';
import sampleUsers from '../sample-users';
import '../css/style.css';

class App extends React.Component {
  state = {
    users: {}
  };

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

        <div className="feature">
          <ul className="users">
            {Object.keys(this.state.users).map(key => (
              <User key={key} details={this.state.users[key]} />
            ))}
          </ul>
        </div>
        <ProfileOther
          addUser={this.addUser}
          updateUser={this.updateUser}
          loadSampleUsers={this.loadSampleUsers}
          users={this.state.users}
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
