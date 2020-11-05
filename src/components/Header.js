import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import { useState } from 'react';
import Button from './Button';
import Menu from './Menu';

const Navigation = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  const toggleMobileMenu = () => {
    setMenuOpened(!menuOpened);
  }

  return (
    <Router>
      <nav className="Header">
        <div className="Container">
          <div className="Header__logo">
            <Link className="Header__logo-copy" to="/">Flearn Co!</Link>
          </div>
          <span className="Header__toggle-menu-button">
            <Button variant="link" onClick={toggleMobileMenu}>Menu</Button>
          </span>
          <Menu opened={menuOpened} />
        </div>
      </nav>
    </Router>
  )
}

export default Navigation;