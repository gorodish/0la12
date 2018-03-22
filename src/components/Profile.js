import React from 'react';
import Footer from './Footer';
import ProfileImage from './ProfileImage';
import AddUserForm from './AddUserForm';
import RightBox from './RightBox';
import Header from './Header';

class Profile extends React.Component {
    render() {
        return (
          <div className="wrapper">
            <Header />
            <ProfileImage />
            <RightBox />
            <AddUserForm />
            <Footer />
          </div>
        );
    }
}

export default Profile;
