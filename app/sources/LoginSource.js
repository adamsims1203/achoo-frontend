import axios from 'axios';
import LoginActions from '../actions/LoginActions';

const LoginSource = {
  login: {
    remote(state) {
      return axios.post('http://localhost:3000/sessions', {
        email: state.email,
        password: state.password,
      });
    },

    success: LoginActions.receivedToken,
    error: LoginActions.loginFailed,
  },
};

export default LoginSource;
