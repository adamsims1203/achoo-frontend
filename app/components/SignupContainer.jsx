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
    firstname: React.PropTypes.string.isRequired,
    lastname: React.PropTypes.string.isRequired,
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
    SignupActions.signup(this.props.firstname, this.props.lastname,
      this.props.email, this.props.password, this.props.passwordRepeat);
  };

  render() {
    return (
      <Signup
        firstname={this.props.firstname}
        lastname={this.props.lastname}
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
