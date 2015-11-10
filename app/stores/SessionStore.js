import { createStore, bind } from 'alt/utils/decorators';
import alt from '../libs/alt';
import history from '../libs/history';
import LoginActions from '../actions/LoginActions';

@createStore(alt)
export default class SessionStore {
  state = {
    jwt: null,
  };

  @bind(LoginActions.receivedJwt)
  onReceivedJwt(response) {
    const jwt = response.data.token;
    this.state.jwt = jwt;
    localStorage.setItem('jwt', jwt);
    history.replaceState(null, '/');
  }

  @bind(LoginActions.logout)
  onLogout() {
    this.state.jwt = null;
    localStorage.removeItem('jwt');
    history.replaceState(null, '/');
  }

  static isLoggedIn() {
    return localStorage.getItem('jwt') !== null;
  }
}
