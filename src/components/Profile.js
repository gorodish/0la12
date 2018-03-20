import React from 'react';
import Footer from './Footer';
import ProfileImage from './ProfileImage';
import RightBox from './RightBox';
import Header from './Header';
import Content from './Content';

class Profile extends React.Component {
    render() {
        return (
          <div className="wrapper">
            <Header />
            <ProfileImage />
            <RightBox />
            <Content />
            <Footer />
          </div>
        );
    }
}

export default Profile;
