import axios from 'axios';
import querystring from 'querystring';
import LoginActions from '../actions/LoginActions';

const LoginSource = {
  login: {
    remote(state) {
      return axios.post('http://localhost:3000/sessions',
        querystring.stringify({
          email: state.email,
          password: state.password,
        }),
        {
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded',
          },
        });
    },

    success: LoginActions.receivedToken,
    error: LoginActions.loginFailed,
  },
};

export default LoginSource;
