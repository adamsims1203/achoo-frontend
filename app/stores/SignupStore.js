import { createStore, datasource, bind } from 'alt/utils/decorators';
import alt from '../libs/alt';
import history from '../libs/history';
import SignupActions from '../actions/SignupActions';
import SignupSource from '../sources/SignupSource';

@createStore(alt)
@datasource(SignupSource)
export default class SignupStore {
  state = {
    firstName: '',
    lastName: '',
    address: '',
    email: '',
    password: '',
    passwordRepeat: '',
    errorMessage: null,
  };

  @bind(SignupActions.updateFormValue)
  onUpdateFormValue({ key, newValue }) {
    this.state[key] = newValue;
  }

  @bind(SignupActions.signup)
  onSignup() {
    setImmediate(() => this.getInstance().signup());
  }

  @bind(SignupActions.finishSignup)
  onFinishSignup() {
    this.state.firstName = '';
    this.state.lastName = '';
    this.state.address = '';
    this.state.email = '';
    this.state.password = '';
    this.state.passwordRepeat = '';
    this.state.errorMessage = null;
    history.replaceState(null, '/login');
  }

  @bind(SignupActions.signupFailed)
  onSignupFailed(errorMessage) {
    this.state.errorMessage = errorMessage;
  }
}
