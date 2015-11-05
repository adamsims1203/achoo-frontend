import { createStore, datasource, bind } from 'alt/utils/decorators';
import alt from '../libs/alt';
import SignupActions from '../actions/SignupActions';
import SignupSource from '../sources/SignupSource';

@createStore(alt)
@datasource(SignupSource)
export default class SignupStore {
  state = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    passwordRepeat: '',
    errorMessage: null,
  };

  @bind(SignupActions.updateFormValue)
  onUpdateFormValue({ key, newValue }) {
    this[key] = newValue;
  }

  @bind(SignupActions.signup)
  onSignup() {
    this.getInstance().signup();
  }

  @bind(SignupActions.finishSignup)
  onFinishSignup() {
  }

  @bind(SignupActions.signupFailed)
  onSignupFailed() {

  }
}
