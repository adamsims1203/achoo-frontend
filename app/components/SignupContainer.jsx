import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import SignupStore from '../stores/SignupStore';
import SignupActions from '../actions/SignupActions';
import Signup from './Signup';

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
    SignupActions.signup(this.props.firstName, this.props.lastName,
      this.props.email, this.props.password, this.props.passwordRepeat);
  };

  render() {
    return (
      <Signup
        firstName={this.props.firstName}
        lastName={this.props.lastName}
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
