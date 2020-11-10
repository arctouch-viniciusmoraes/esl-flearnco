import { useState } from 'react';

import Button from './Button';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = (event) => {
    event.preventDefault();
    console.log(`Success | email: ${email}, password: ${password}`);
  }

  return (
    <form onSubmit={login} className="Login-form">
      <p className="Login-form__title">
        For the best learning experience around, please log in to your account.
      </p>
      <div className="Form-input__field-group">
        <label className="Form-input__label" htmlFor="email">Your e-mail address:</label>
        <input
          className="Form-input__input"
          id="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
      </div>

      <div className="Form-input__field-group">
        <label className="Form-input__label" htmlFor="password">Your password:</label>
        <input
          className="Form-input__input"
          id="password"
          type="password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
      </div>

      <Button type="submit" variant="primary" size="xs">Log In</Button>
    </form>
  );
}

export default Login;