import logo from '../assets/logo.svg';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Header extends Component {
  render() {
    return (
      <header className="PageHeader">
        <div className="Logo">
          <Link to="/">
            <img height="30" src={logo} />
          </Link>
        </div>
        <nav className="Navigation">
          <Link className="NavigationLink" to="/login">Login</Link>
          <Link className="NavigationLink SIGNUP" to="/signup">Sign up</Link>
        </nav>
      </header>
    );
  }
}
