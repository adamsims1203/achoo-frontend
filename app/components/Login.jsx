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
      <form role="form">
        <input type="text" valueLink={this.makeValueLink('email')} placeholder="Email" />
        <input type="password" valueLink={this.makeValueLink('password')} placeholder="Password" />
        <button type="submit" onClick={this.props.onLoginClicked}>Login</button>
      </form>
    );
  }
}
