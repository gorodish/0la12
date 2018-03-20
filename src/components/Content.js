import React from 'react';
import cherryLg from '../css/images/dent-button-cherry-apple-active.png';

class Content extends React.Component {
  render() {
    return (
      <div className="box content">
        <h1>Language Exchange Network</h1>
        <div className="intro">
            <p>Connect with <span className="iconsm">Ola</span><span className="iconexcl">!</span> members to spend time practicing your language skills</p>
            <p>Browse profiles of those members nearby or search a city you'll be visiting</p>
        </div>
        <div className="search">
            <ul>
                <li className="searchCity">
                    <h2>Search Nearby</h2>
                </li>
                <li className="searchCity"><img src={cherryLg} alt="cherry" /></li>
            </ul>
            <ul>
                <li className="searchCity">
                    <h2>Search City</h2>
                </li>
                <li className="searchCity">
                    <form className="searchBox">
                        <input type="text" required placeholder="Seville" />
                    </form>
                </li>
                <li className="searchCity"><img src={cherryLg} alt="cherry" /></li>
            </ul>
        </div>
      </div>
    );
  }
}

export default Content;
