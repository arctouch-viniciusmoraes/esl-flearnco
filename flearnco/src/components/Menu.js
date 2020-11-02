import {
  NavLink,
} from 'react-router-dom';

const Menu = (props) => {

  if (props.opened) {
    return (
      <ul className={`Menu ${props.opened ? 'Opened' : ''}`}>
        <li className="Menu__item">
          <NavLink exact activeClassName="active" to="/">Home</NavLink>
        </li>
        <li className="Menu__item">
          <NavLink activeClassName="active" to="/lessons">Lessons</NavLink>
        </li>
        <li className="Menu__item">
          <NavLink activeClassName="active" to="/contact">Contact</NavLink>
        </li>
      </ul>
    );
  } else {
    return null;
  }
}

export default Menu;