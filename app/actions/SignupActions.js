import { createActions } from 'alt/utils/decorators';
import alt from '../libs/alt';

@createActions(alt)
export default class SignupActions {
  constructor() {
    this.generateActions(
      'updateFormValue',
      'finishSignup',
      'signupFailed',
    );
  }

  signup() {

  }

}
