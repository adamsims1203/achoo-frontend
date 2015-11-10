import { createActions } from 'alt/utils/decorators';
import alt from '../libs/alt';

@createActions(alt)
export default class LoginActions {
  constructor() {
    this.generateActions(
      'login',
      'updateFormValue',
      'receivedJwt',
      'loginFailed',
      'logout',
    );
  }
}
