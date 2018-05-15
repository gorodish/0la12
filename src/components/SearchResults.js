import React from 'react';
import Footer from './Footer';
import FeatureBox from './FeatureBox';
import RightBox from './RightBox';
import Header from './Header';
import Content from './Content';
import ProfileOther from './ProfileOther';
import '../css/style.css';

class SearchResults extends React.Component {
  state = {
    users: {}
  };
  render() {
    return (
      <div className="wrapper">
        <Header />
        <FeatureBox />
        <RightBox />
        <Content>
          {' '}
          {Object.keys(this.state.users).map(key => (
            <ProfileOther key={key} details={this.state.users[key]} />
          ))}
        </Content>

        <button>search</button>
        <Footer />
      </div>
    );
  }
}

export default SearchResults;
