import React from 'react';

class RightBox extends React.Component {
  render() {
    return (
      <div className="sidebar">
        <button onClick={this.props.loadSampleUsers}>Load profiles</button>
      </div>
    );
  }
}

export default RightBox;
