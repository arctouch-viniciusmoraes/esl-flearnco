import { useState } from 'react';

import FormInput from './FormInput';
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
      <FormInput
        fieldId="email"
        inputType="email"
        label="Your e-mail address:"
        inputCallback={setEmail}
        required={true}
      />

      <FormInput
        fieldId="password"
        inputType="password"
        label="Your password:"
        inputCallback={setPassword}
        required={true}
      />

      <Button type="submit" variant="primary" size="xs">Log In</Button>
    </form>
  );
}

export default Login;