import logo from '../assets/logo.svg';

import React, { Component } from 'react';
import { Link } from 'react-router';


export default class Header extends Component {
  static propTypes = {
    isLoggedIn: React.PropTypes.bool.isRequired,
    onLogoutClicked: React.PropTypes.func.isRequired,
  };

  render() {
    const navigationBar = this.props.isLoggedIn ?
      (
        <nav className="Navigation">
          <span className="NavigationText">Welcome!</span>
          <Link className="NavigationLink" to="#" onClick={this.props.onLogoutClicked}>Logout</Link>
        </nav>
      )
      : (
        <nav className="Navigation">
          <Link className="NavigationLink" to="/login">Login</Link>
          <Link className="NavigationLink SIGNUP" to="/signup">Sign up</Link>
        </nav>
      );

    return (
      <header className="PageHeader">
        <div className="Logo">
          <Link to="/">
            <img height="30" src={logo} />
          </Link>
        </div>
        {navigationBar}
      </header>
    );
  }
}
