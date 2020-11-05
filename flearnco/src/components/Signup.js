import Button from './Button';

const Signup = () => {
  return(
    <aside className="Signup">
      <h2 className="Secondary-heading Signup__title">
        Don't have an account? <br/>
        Signup today –– it's free!
      </h2>
      <p className="Signup__disclaimer">
        With our revolutionary learning software, you'll be ahead of the pack in no time.
        We can't wait for you to get started with us!
      </p>
      <Button type="button" variant="secondary" size="lg">Sign Up For a Free Account</Button>
    </aside>
  );
}

export default Signup;