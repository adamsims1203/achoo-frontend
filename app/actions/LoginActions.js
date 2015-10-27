import { createActions } from 'alt/utils/decorators';
import alt from '../libs/alt';
import LoginSource from '../sources/LoginSource';

@createActions(alt)
export default class LoginActions {
  constructor() {
    this.generateActions(
      'updateFormValue',
      'finishLogin',
      'loginFailed',
    );
  }

  login(email, password) {
    this.dispatch();

    LoginSource.login(email, password)
      .then((jwt) => {
        localStorage.setItem('jwt', jwt);
        this.actions.finishLogin(jwt);
      })
      .catch((errorMessage) => {
        this.actions.loginFailed(errorMessage);
      });
  }

  logout() {
    localStorage.removeItem('jwt');
    this.dispatch();
  }
}
