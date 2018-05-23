import React from 'react';
import PropTypes from 'prop-types';
import sampleUsers from '../sample-users';
import { getFunName } from '../helpers.js';

class ProfilePicker extends React.Component {
  chooseProfile = React.createRef();
  static propTypes = {
    history: PropTypes.object
  };

  goToProfile = event => {
    event.preventDefault();
    const profileChoice = this.chooseProfile.current.value;
    this.props.history.push(`/profile/${profileChoice}`);
  };
  render() {
    return (
      <form className="profile-selector" onSubmit={this.goToProfile}>
        <input
          type="text"
          ref={this.chooseProfile}
          required
          placeholder="Profile name"
          defaultValue={getFunName()}
        />
        <button type="submit">Submit</button>
      </form>
    );
  }
}

export default ProfilePicker;
