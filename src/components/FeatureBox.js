import React from 'react';
import featureImage from '../css/images/nm-portrait-04-ola160x240_2x.jpg';

class FeatureBox extends React.Component {
  render() {
    return (
      <section id="feature">
        <img src={featureImage} id="featureImage" alt="User" />
      </section>
    );
  }
}

export default FeatureBox;
