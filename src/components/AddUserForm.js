import React from 'react';
import PropTypes from "prop-types";

class AddUserForm extends React.Component {
  static propTypes = {
    profile: PropTypes.shape({
      name: PropTypes.string,
      email: PropTypes.string,
      location: PropTypes.string,
      phone: PropTypes.string
    })
  };
    render() {
        return (
          <div className="profile-edit">
            <input
              type="text"
              name="name"
              value="name"
            />
            <input
              type="text"
              name="email"
              value="email"
            />
            <select
              type="text"
              name="location"
              value="location"
            >
              <option value="here">Here!</option>
              <option value="there">There</option>
            </select>
            <input
              type="text"
              name="phone"
              value="phone"
            />
            <button onClick={() => this.props.deleteProfile(this.props.index)}>
              Remove Profile
            </button>
          </div>
        );
    }
}

export default AddUserForm;
