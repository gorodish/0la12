import React from 'react';

class ProfileHeadline extends React.Component {
    render() {
        return (
          <div className="profileWrapper">
            <h1>{this.props.name}</h1>
          </div>
        );
    }
}

export default ProfileHeadline;
