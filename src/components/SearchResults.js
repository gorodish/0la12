import React from 'react';
import Footer from './Footer';
import RightBox from './RightBox';
import Header from './Header';
import FeatureBox from './FeatureBox';

class SearchResults extends React.Component {
    render() {
        return (
          <div className="wrapper">
            <Header />
            <FeatureBox />
            <RightBox />
            <div>
              <ul>
                <li>Bob Smith</li>
                <li>Alice Wonderland</li>
                <li>Jeff Jeffling</li>
              </ul>
              <button onClick={this.props.loadSampleUsers}>Load sample results</button>
            </div>
            <Footer />
          </div>
        );
    }
}

export default SearchResults;
