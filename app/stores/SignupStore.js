import { createStore } from 'alt/utils/decorators';
import alt from '../libs/alt';
import SignupActions from '../actions/SignupActions';

@createStore(alt)
export default class SignupStore {
  constructor() {
    this.bindActions(SignupActions);

    this.firstname = '';
    this.lastname = '';
    this.email = '';
    this.password =
    this.password_repeat = '';
    this.jwt = null;
    this.errorMessage = null;
  }

  onUpdateFormValue({ key, newValue }) {
    this[key] = newValue;
  }

  onSignup() {

  }

  onFinishLSignup(jwt) {
    this.jwt = jwt;
  }

  onSignupFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}
