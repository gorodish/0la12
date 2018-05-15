import React from 'react';
import PropTypes from 'prop-types';

class AddUserForm extends React.Component {
  nameRef = React.createRef();
  emailRef = React.createRef();
  locationRef = React.createRef();
  phoneRef = React.createRef();

  static propTypes = {
    addUser: PropTypes.func
  };

  createProfile = event => {
    //stop form from submitting
    event.preventDefault();
    const user = {
      name: this.nameRef.current.value,
      phone: this.phoneRef.current.value,
      location: this.locationRef.current.value,
      email: this.emailRef.current.value,
      photo: this.photoRef.current.value,
      gender: this.genderRef.current.value,
      age: this.ageRef.current.value,
      description: this.descRef.current.value,
      lang_native: this.lnativeRef.current.value,
      lang_practice: this.lpracRef.current.value,
      lang_other: this.lotherRef.current.value
    };
    this.props.addUser(user);
    event.currentTarget.reset();
  };
  render() {
    return (
      <form className="profile-edit" onSubmit={this.createProfile}>
        <input name="name" type="text" ref={this.nameRef} placeholder="name" />
        <input
          name="phone"
          type="text"
          ref={this.phoneRef}
          placeholder="phone"
        />
        <select
          name="location"
          type="text"
          ref={this.locationRef}
          placeholder="location"
        >
          <option value="UK">UK</option>
          <option value="Spain">Spain</option>
        </select>
        <input
          name="email"
          type="text"
          ref={this.emailRef}
          placeholder="email"
        />
        <input
          name="photo"
          type="text"
          ref={this.photoRef}
          placeholder="photo"
        />
        <select
          name="gender"
          type="text"
          ref={this.genderRef}
          placeholder="gender"
        >
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input name="age" type="text" ref={this.ageRef} placeholder="age" />
        <input
          name="description"
          type="text"
          ref={this.descRef}
          placeholder="description"
        />
        <input
          name="lang_native"
          type="text"
          ref={this.lnativeRef}
          placeholder="native language"
        />
        <input
          name="lang_practice"
          type="text"
          ref={this.lpracticeRef}
          placeholder="practice language"
        />
        <input
          name="lang_other"
          type="text"
          ref={this.lotherRef}
          placeholder="other language"
        />
        <button type="submit">+ Add User</button>
        <br />
        <button onClick={() => this.props.deleteProfile(this.props.index)}>
          Remove Profile
        </button>
      </form>
    );
  }
}

export default AddUserForm;
