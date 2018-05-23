import React from 'react';

class EditUserForm extends React.Component {
  handleChange = event => {
    console.log(event.currentTarget.value);
    //  update the user
    //take a copy of the current users
    const updatedUser = {
      ...this.props.user,
      [event.currentTarget.name]: event.currentTarget.value
    };
    this.props.updateUser(this.props.index, updatedUser);
  };
  render() {
    return (
      <div className="user-edit">
        <input
          type="text"
          name="name"
          onChange={this.handleChange}
          value={this.props.user.name}
        />
        <input
          type="text"
          name="photo"
          onChange={this.handleChange}
          value={this.props.user.photo}
        />
        <input
          type="text"
          name="phone"
          onChange={this.handleChange}
          value={this.props.user.phone}
        />
        <input
          type="text"
          name="location"
          onChange={this.handleChange}
          value={this.props.user.location}
        />
        <select type="text" name="gender" onChange={this.handleChange}>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
        <input
          type="text"
          name="email"
          onChange={this.handleChange}
          value={this.props.user.email}
        />
        <input
          type="text"
          name="age"
          onChange={this.handleChange}
          value={this.props.user.age}
        />
        <textarea
          type="text"
          name="description"
          onChange={this.handleChange}
          value={this.props.user.description}
        />
        <input
          type="text"
          name="lang_native"
          onChange={this.handleChange}
          value={this.props.user.lang_native}
        />
        <input
          type="text"
          name="lang_practice"
          onChange={this.handleChange}
          value={this.props.user.lang_practice}
        />
        <input
          type="text"
          name="lang_other"
          onChange={this.handleChange}
          value={this.props.user.lang_other}
        />
      </div>
    );
  }
}

export default EditUserForm;
