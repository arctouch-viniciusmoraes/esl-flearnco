import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import Button from './Button.js';

const Navigation = () => {
  return (
    <Router>
      <nav className="Navigation">
        <div className="Navigation__logo">
          <Link className="Navigation__logo-copy" to="/">Flearn Co!</Link>
        </div>
        <Button label="Menu" variant="link" />
        <ul className="Navigation__menu">
          <li>
            <Link className="Navigation__menu--item" to="/">Home</Link>
          </li>
          <li>
            <Link className="Navigation__menu--item" to="/lessons">Lessons</Link>
          </li>
          <li>
            <Link className="Navigation__menu--item" to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </Router>
  )
}

export default Navigation;