import React from 'react';
import PropTypes from 'prop-types';
import sampleUsers from '../sample-users';

class ProfilePicker extends React.Component {
  chooseProfile = React.createRef();
  static propTypes = {
    history: PropTypes.object
  };

  goToProfile = event => {
    event.preventDefault();
    const profileChoice = this.chooseProfile.value.value;
    this.props.history.push(`/profile/${profileChoice}`);
  };
  render() {
    return (
      <form onChange={this.goToProfile}>
        <select multiple={true} value={['Bello', 'Cello']} />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default ProfilePicker;
