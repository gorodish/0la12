import React from 'react';
import Footer from './Footer';
import FeatureBox from './FeatureBox';
import RightBox from './RightBox';
import Header from './Header';
import Content from './Content';
import Profile from './Profile';
import Home from './Home';
import '../css/style.css';

class App extends React.Component {
    render() {
        return (
          <div className="wrapper">
            <Header />
            <Profile name={ Bob } />
            <RightBox />
            <Content />
            <Footer />
          </div>
        );
    }
}

export default App;
