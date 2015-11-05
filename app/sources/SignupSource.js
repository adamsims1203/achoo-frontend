import axios from 'axios';
import SignupActions from '../actions/SignupActions';

const SignupSource = {
  signup: {
    remote(state) {
      return axios.post('http://localhost:3000/users', {
        firstName: state.firstName,
        lastName: state.lastName,
        email: state.email,
        password: state.password,
      });
    },

    success: SignupActions.finishSignup,
    error: SignupActions.signupFailed,
  },
};

export default SignupSource;
