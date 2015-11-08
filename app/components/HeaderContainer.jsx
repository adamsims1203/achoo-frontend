import React, { Component } from 'react';
import connectToStores from 'alt/utils/connectToStores';
import LoginStore from '../stores/LoginStore';
import LoginActions from '../actions/LoginActions';
import Header from './Header';

@connectToStores
export default class HeaderContainer extends Component {
 /* eslint-disable react/sort-comp */
  static getStores() {
    return [LoginStore];
  }

  static getPropsFromStores() {
    return {
      isLoggedIn: LoginStore.getUserIsLoggedIn()
    };
  }

  onLogoutClicked = () => {
    LoginActions.logout();
  }

  render() {
    return (
      <Header
        onLogoutClicked = {this.onLogoutClicked}
        isLoggedIn = {this.props.isLoggedIn}
      />
    );
  }
}
