import React from 'react';
import PropTypes from "prop-types";

class AddUserForm extends React.Component {
  nameRef = React.createRef();
  emailRef = React.createRef();
  locationRef = React.createRef();
  phoneRef = React.createRef();

  createUser = event => {
//1 - stop the form from submitting
    event.preventDefault();
    const user = {
      name: this.nameRef.value.value,
      email: this.emailRef.value.value,
      location: this.locationRef.value.value,
      phone: this.phoneRef.value.value,
    }
    console.log("adding a user");
  };
    render() {
        return (
          <div className="profile-edit">
            <input
              type="text"
              name="name"
              ref={this.nameRef}
              placeholder="name"
            />
            <input
              type="text"
              name="email"
              ref={this.emailRef}
              placeholder="email"
            />
            <select
              type="text"
              name="location"
              ref={this.locationRef}
              placeholder="location"
            >
              <option value="here">Here!</option>
              <option value="there">There</option>
            </select>
            <input
              type="text"
              name="phone"
              ref={this.phoneRef}
              placeholder="phone"
            />
            <button type="submit">+ Add User</button>
          </div>
        );
    }
}

export default AddUserForm;
