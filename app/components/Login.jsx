import React, { Component } from 'react';


export default class Login extends Component {
  static propTypes = {
    email: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    errorMessage: React.PropTypes.string,
    onUpdateFormValue: React.PropTypes.func.isRequired,
    onLoginClicked: React.PropTypes.func.isRequired,
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
            <form className="LoginForm" role="form">
              <div className="Field">
                <label className="FieldLabel" htmlFor="email">Email</label>
                <input className="TextField" id="email" valueLink={this.makeValueLink('email')} type="text" />
              </div>
              <div className="Field">
                <label className="FieldLabel" htmlFor="password">Password</label>
                <input className="TextField" id="password" valueLink={this.makeValueLink('password')} type="password" />
              </div>
              <button type="submit" className="PrimaryButton" onClick={this.props.onLoginClicked}>Login</button>
              <p>{this.props.errorMessage}</p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}
