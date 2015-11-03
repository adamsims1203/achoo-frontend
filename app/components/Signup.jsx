import React, { Component } from 'react';

export default class Signup extends Component {
  static propTypes = {
    firstname: React.PropTypes.string.isRequired,
    lastname: React.PropTypes.string.isRequired,
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
                <label className="FieldLabel" htmlFor="firstname">First name</label>
                <input className="TextField" id="firstname" valueLink={this.makeValueLink('firstname')} type="text" />
              </div>
              <div className="Field">
                <label className="FieldLabel" htmlFor="lastname">Last name</label>
                <input className="TextField" id="lastname" valueLink={this.makeValueLink('lastname')} type="text" />
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
            </form>
          </div>
        </div>
      </div>
    );
  }
}
