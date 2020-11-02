import {
  Link,
} from 'react-router-dom';

const Menu = (props) => {
  return (
    <ul className={`Menu ${props.opened ? 'Opened' : ''}`}>
      <li className="Menu__item">
        <Link to="/">Home</Link>
      </li>
      <li className="Menu__item">
        <Link to="/lessons">Lessons</Link>
      </li>
      <li className="Menu__item">
        <Link to="/contact">Contact</Link>
      </li>
    </ul>
  );
}

export default Menu;