import React, { Component } from 'react';

export default class NotFound extends Component {
  render() {
    return (
      <div className="PageContent">
        <div className="Content">
          <div className="FormBox">
            <h1 className="ErrorTitle">404</h1>
            <p>This is not the drug you're looking for</p>
          </div>
        </div>
      </div>
    );
  }
}
