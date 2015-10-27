import { createStore } from 'alt/utils/decorators';
import alt from '../libs/alt';
import LoginActions from '../actions/LoginActions';

@createStore(alt)
export default class LoginStore {
  constructor() {
    this.bindActions(LoginActions);

    this.email = '';
    this.password = '';
    this.jwt = null;
    this.errorMessage = null;
  }

  onUpdateFormValue({ key, newValue }) {
    this[key] = newValue;
  }

  onLogin() {
    this.email = '';
    this.password = '';
    this.errorMessage = null;
  }

  onFinishLogin(jwt) {
    this.jwt = jwt;
  }

  onLoginFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  onLogout() {
    this.jwt = null;
  }

  static isLoggedIn() {
    const { jwt } = this.getState();
    return jwt !== null;
  }
}
