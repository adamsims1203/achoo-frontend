export default class LoginSource {
  static login(email, password) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (email === 'user@example.com' && password === 'password') {
          const jwt = 'shhhhhh';
          resolve(jwt);
        } else {
          reject('Invalid email/password combination');
        }
      }, 250);
    });
  }
}
