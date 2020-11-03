import FormInput from './FormInput';
import Button from './Button';

const Login = () => {
  return (
    <form className="Login-form">
      <p className="Login-form__title">For the best learning experience around, please log in to your account.</p>
      <FormInput
        fieldId="email"
        inputType="email"
        label="Your e-mail address:"
      />

      <FormInput
        fieldId="password"
        inputType="password"
        label="Your password:"
      />

      <Button variant="primary" size="sm">Log In</Button>
    </form>
  );
}

export default Login;