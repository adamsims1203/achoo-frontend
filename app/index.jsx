import './normalize.css';
import './main.css';

import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute } from 'react-router';
import createBrowserHistory from 'history/lib/createBrowserHistory';
import App from './components/App';
import Home from './components/Home';
import Pharmacy from './components/Pharmacy';
import LoginContainer from './components/LoginContainer';
import SignupContainer from './components/SignupContainer';
import NotFound from './components/NotFound';

function main() {
  const app = document.createElement('div');
  app.className = 'App';

  document.body.appendChild(app);

  render((
    <Router history={createBrowserHistory()}>
      <Route path="/" component={App}>
        <IndexRoute component={Home} />
        <Route path="login" component={LoginContainer} />
        <Route path="signup" component={SignupContainer} />
        <Route path="pharmacies/:id" component={Pharmacy} />
        <Route path="*" component={NotFound}/>
      </Route>
    </Router>
  ), app);
}

main();
