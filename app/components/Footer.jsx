import logo from '../assets/logo.svg';

import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Footer extends Component {
  render() {
    return (
      <div className="PageFooterWrapper">
        <footer className="PageFooter">
          <div className="PageFooterLogo">
            <Link to="/">
              <img height="33" src={logo} />
            </Link>
          </div>
        </footer>
      </div>
    );
  }
}
