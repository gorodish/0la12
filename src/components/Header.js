import React from 'react';
import cherrySm from '../css/images/dent-button-cherry-apple-active.png';

class Header extends React.Component {
  render() {
    return (
      <div className="box header">
          <div className="toplinks">
              <ul>
                  <li><img className="cherrySm" src={cherrySm} alt="cherry" /></li>
                  <li id="toplinksLog">Login</li>
                  <li><img className="cherrySm" src={cherrySm} alt="cherry" /></li>
                  <li id="toplinksReg">Register</li>
              </ul>
          </div>
      </div>
    );
  }
}

export default Header;
