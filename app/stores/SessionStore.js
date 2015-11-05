import { createStore, bind } from 'alt/utils/decorators';
import alt from '../libs/alt';
import LoginActions from '../actions/LoginActions';

@createStore(alt)
export default class SessionStore {
  state = {
    jwt = null;
  };

  @bind(LoginActions.receivedJwt)
  onReceivedJwt(jwt) {
    this.state.jwt = jwt;
  }

  @bind(LoginActions.logout)
  onLogout() {
    this.state.jwt = null;
  }

  static isLoggedIn() {
    const { jwt } = this.getState();
    return jwt !== null;
  }
}
