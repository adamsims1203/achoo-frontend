import { createStore, datasource, bind } from 'alt/utils/decorators';
import alt from '../libs/alt';
import LoginActions from '../actions/LoginActions';
import LoginSource from '../sources/LoginSource';

@createStore(alt)
@datasource(LoginSource)
export default class LoginStore {
  state = {
    email: '',
    password: '',
    errorMessage: null,
  };

  @bind(LoginActions.updateFormValue)
  onUpdateFormValue({ key, newValue }) {
    this[key] = newValue;
  }

  @bind(LoginActions.login)
  onLogin() {
    this.getInstance().login();
    this.email = '';
    this.password = '';
    this.errorMessage = null;
  }

  @bind(LoginActions.loginFailed)
  onLoginFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
}
