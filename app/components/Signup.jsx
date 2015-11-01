import React, { Component } from 'react';

export default class Signup extends Component {
  static propTypes = {
    firstname: React.PropTypes.string.isRequired,
    lastname: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    password_repeat: React.PropTypes.string.isRequired,
    errorMessage: React.PropTypes.string,
    onUpdateFormValue: React.PropTypes.func.isRequired,
    onSignupClicked: React.PropTypes.func.isRequired,
  };

  makeValueLink = (key) => {
    return {
      value: this.props[key],
      requestChange: (newValue) => this.props.onUpdateFormValue(key, newValue),
    };
  };

  render() {
    return (
      <div className="PageContent">
        <div className="Content">
          <div className="FormBox">
            <h1>Signup</h1>
            <form className="SignupForm" role="form">
              <input type="text" valueLink={this.makeValueLink('firstname')} placeholder="First name" />
              <input type="text" valueLink={this.makeValueLink('lastname')} placeholder="Last name" />
              <input type="email" valueLink={this.makeValueLink('email')} placeholder="Email" />
              <input type="password" valueLink={this.makeValueLink('password')} placeholder="Password" />
              <input type="password" valueLink={this.makeValueLink('password_repeat')} placeholder="Repeat password" />
              <button type="submit" onClick={this.props.onSignupClicked}>Signup</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
