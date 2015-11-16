import axios from 'axios';
import querystring from 'querystring';
import LoginActions from '../actions/LoginActions';

const LoginSource = {
  login: {
    remote(state) {
      return axios.post('http://api.achoo.uy/sessions',
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

    success: LoginActions.receivedJwt,
    error: LoginActions.loginFailed,
  },
};

export default LoginSource;
