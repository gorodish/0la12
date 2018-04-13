import React from 'react';

class Profile extends React.Component {
  render() {
    const {
      name,
      phone,
      location,
      email,
      photo,
      gender,
      age,
      description,
      lang_native,
      lang_practice,
      lang_other
    } = this.props.details;
    return (
      <div>
        <li className="userContent">
          <h1>{name}</h1>
          <img src={photo} alt={name} />
          <p>Phone: {phone}</p>
          <p>Location: {location}</p>
          <p>{gender}</p>
          <p>Email: {email}</p>
          <p className="yellowUnderline">Age: {age}</p>
          <p className="yellowUnderline">{description}</p>
          <p>Native language: {lang_native}</p>
          <p>Practice language: {lang_practice}</p>
          <p>Other language: {lang_other}</p>
        </li>
      </div>
    );
  }
}

export default Profile;
