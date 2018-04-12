import React from 'react';
import Footer from './Footer';
import FeatureBox from './FeatureBox';
import RightBox from './RightBox';
import Header from './Header';
import Content from './Content';
import Profile from './Profile';
import Home from './Home';
import AddUserForm from './AddUserForm';
import SearchResults from './SearchResults';
import sampleUsers from '../sample-users';
import '../css/style.css';

class App extends React.Component {
  state = {
    users: {}
  };
  addUser = user => {
    console.log("adding a user")
  };
  loadSampleUsers = () => {
    this.setState({ users: sampleUsers});
  };
    render() {
        return (
          <div className="wrapper">

            <Header />
              <ul>{Object.keys(this.state.users).map(key => <Profile key={key} details={this.state.users[key]} />)}</ul>

            <Content />
            <RightBox loadSampleUsers={this.loadSampleUsers} />
            <Content><SearchResults /></Content>
            <Footer />
          </div>
        );
    }
}

export default App;
