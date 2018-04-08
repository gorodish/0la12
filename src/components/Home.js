import React from 'react';
import Footer from './Footer';
import FeatureBox from './FeatureBox';
import RightBox from './RightBox';
import Header from './Header';
import Content from './Content';
import '../css/style.css';

class Home extends React.Component {
    render() {
        return (
          <div className="wrapper">
            <Header />
            <FeatureBox />
            <RightBox />
            <Content />
            <button>search</button>
            <Footer />
          </div>
        );
    }
}

export default Home;
