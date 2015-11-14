import React, { Component } from 'react';

export default class Signup extends Component {
  static propTypes = {
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    passwordRepeat: React.PropTypes.string.isRequired,
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
            <form className="SignupForm" role="form">
              <div className="Field">
                <label className="FieldLabel" htmlFor="firstName">First name</label>
                <input className="TextField" id="firstName" valueLink={this.makeValueLink('firstName')} type="text" />
              </div>
              <div className="Field">
                <label className="FieldLabel" htmlFor="lastName">Last name</label>
                <input className="TextField" id="lastName" valueLink={this.makeValueLink('lastName')} type="text" />
              </div>
              <div className="Field">
                <label className="FieldLabel" htmlFor="address">Address</label>
                <input className="TextField" id="address" valueLink={this.makeValueLink('address')} type="text" />
              </div>
              <div className="Field">
                <label className="FieldLabel" htmlFor="email">Email</label>
                <input className="TextField" id="email" valueLink={this.makeValueLink('email')} type="text" />
              </div>
              <div className="Field">
                <label className="FieldLabel" htmlFor="password">Password</label>
                <input className="TextField" id="password" valueLink={this.makeValueLink('password')} type="password" />
              </div>
              <div className="Field">
                <label className="FieldLabel" htmlFor="password-repeat">Confirm password</label>
                <input className="TextField" id="password-repeat" valueLink={this.makeValueLink('passwordRepeat')} type="password" />
              </div>
              <button type="submit" className="PrimaryButton" onClick={this.props.onSignupClicked}>Sign up</button>
              <div className="FormError">{this.props.errorMessage}</div>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
