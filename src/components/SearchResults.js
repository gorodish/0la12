import React from 'react';
import Footer from './Footer';
import RightBox from './RightBox';
import Header from './Header';
import FeatureBox from './FeatureBox';

class SearchResults extends React.Component {
    render() {
      const { name, phone, location, email, photo, gender, age, description, lang_native, lang_practice, lang_other } = this.props.details;
        return (
          <div className="wrapper">
            <Header />
            <FeatureBox />
            <RightBox />
            <div>
              <ul>
                <li>{name}</li>
                <li>{location}</li>
                <li>{description}</li>
              </ul>
              <button onClick={this.props.loadSampleUsers}>Load sample results</button>
            </div>
            <Footer />
          </div>
        );
    }
}

export default SearchResults;
