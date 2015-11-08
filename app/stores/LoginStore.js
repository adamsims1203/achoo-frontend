import { createStore, datasource, bind } from 'alt/utils/decorators';
import alt from '../libs/alt';
import LoginActions from '../actions/LoginActions';
import LoginSource from '../sources/LoginSource';
import { Router, Route, IndexRoute } from 'react-router';

@createStore(alt)
@datasource(LoginSource)
export default class LoginStore {
  state = {
    email: '',
    password: '',
    errorMessage: null
  };


  @bind(LoginActions.updateFormValue)
  onUpdateFormValue({ key, newValue }) {
    this.state[key] = newValue;
  }

  @bind(LoginActions.login)
  onLogin() {
    this.getInstance().login();
    this.email = '';
    this.password = '';
    this.errorMessage = null;
  }

  @bind(LoginActions.receivedToken)
  onReceivedToken(response){
    if(response.data.token){
      localStorage.setItem('token', response.data.token);
      window.location.href = "/";
    }else{
      this.state['errorMessage'] = "Invalid email or password";
    }
  }

  @bind(LoginActions.loginFailed)
  onLoginFailed(errorMessage) {
    this.state['errorMessage'] = "Invalid email or password";
  }

  @bind(LoginActions.logout)
  onLogout(){
    localStorage.removeItem('token');
    window.location.href = "/";
  }

  static getUserIsLoggedIn() {
    return localStorage.getItem('token') != null;
  }
}
