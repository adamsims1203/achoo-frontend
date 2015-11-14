import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import SignupStore from '../stores/SignupStore';
import SignupActions from '../actions/SignupActions';
import Signup from './Signup';

const EMAIL_ADDRESS_REGEX = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

@connectToStores
export default class SignupContainer extends Component {
  /* eslint-disable react/sort-comp */
  static getStores() {
    return [SignupStore];
  }

  static getPropsFromStores() {
    return SignupStore.getState();
  }
  /* eslint-enable react/sort-comp */

  static propTypes = {
    firstName: React.PropTypes.string.isRequired,
    lastName: React.PropTypes.string.isRequired,
    address: React.PropTypes.string.isRequired,
    email: React.PropTypes.string.isRequired,
    password: React.PropTypes.string.isRequired,
    passwordRepeat: React.PropTypes.string.isRequired,
    errorMessage: React.PropTypes.string,
  };

  onUpdateFormValue = (key, newValue) => {
    SignupActions.updateFormValue({ key, newValue });
  };

  onSignupClicked = (evt) => {
    evt.preventDefault();

    if (this.props.firstName === '') {
      return SignupActions.signupFailed('First name cannot be blank.');
    }

    if (this.props.lastName === '') {
      return SignupActions.signupFailed('Last name cannot be blank.');
    }

    if (this.props.address === '') {
      return SignupActions.signupFailed('Address cannot be blank.');
    }

    if (this.props.email === '') {
      return SignupActions.signupFailed('Email cannot be blank.');
    }

    if (!EMAIL_ADDRESS_REGEX.test(this.props.email)) {
      return SignupActions.signupFailed('Email is not valid.');
    }

    if (this.props.password === '') {
      return SignupActions.signupFailed('Password cannot be blank.');
    }

    if (this.props.password !== this.props.passwordRepeat) {
      return SignupActions.signupFailed('Passwords don\'t match.');
    }

    SignupActions.signup(
      this.props.firstName,
      this.props.lastName,
      this.props.address,
      this.props.email,
      this.props.password,
    );
  };

  render() {
    return (
      <Signup
        firstName={this.props.firstName}
        lastName={this.props.lastName}
        address={this.props.address}
        email={this.props.email}
        password={this.props.password}
        passwordRepeat={this.props.passwordRepeat}
        errorMessage={this.props.errorMessage}
        onUpdateFormValue={this.onUpdateFormValue}
        onSignupClicked={this.onSignupClicked}
      />
    );
  }
}
