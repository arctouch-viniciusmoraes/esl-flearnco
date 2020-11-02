import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';
import { useState } from 'react';
import Button from './Button.js';
import Menu from './Menu.js';

const Navigation = () => {
  const [menuOpened, setMenuOpened] = useState(false);

  function toggleMobileMenu() {
    setMenuOpened(!menuOpened);
  }

  return (
    <Router>
      <nav className="Header">
        <div className="Header__logo">
          <Link className="Header__logo-copy" to="/">Flearn Co!</Link>
        </div>
        <Button variant="link" onClick={toggleMobileMenu}>Menu</Button>
        <Menu opened={menuOpened} />
      </nav>
    </Router>
  )
}

export default Navigation;