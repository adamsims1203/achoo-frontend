import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import LoginStore from '../stores/LoginStore';
import LoginActions from '../actions/LoginActions';
import Login from './Login';

@connectToStores
export default class LoginContainer extends Component {
  /* eslint-disable react/sort-comp */
  static getStores() {
    return [LoginStore];
  }

  static getPropsFromStores() {
    return LoginStore.getState();
  }

  
  /* eslint-enable react/sort-comp */

  static propTypes = {
    email: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    errorMessage: React.PropTypes.string,
  };

  onUpdateFormValue = (key, newValue) => {
    LoginActions.updateFormValue({ key, newValue });
  };

  onLoginClicked = (evt) => {
    evt.preventDefault();
    LoginActions.login(this.props.email, this.props.password);
  };

  render() {
    return (
      <Login
        email={this.props.email}
        password={this.props.password}
        errorMessage={this.props.errorMessage}
        onUpdateFormValue={this.onUpdateFormValue}
        onLoginClicked={this.onLoginClicked}
      />
    );
  }
}
