import { Link } from 'react-router-dom';
import Header from './Header';

function Navbar() {
  return (
    <nav className="nav_bar">
      <Header />
      <ul className="links">
        <li className="link">
          <Link to="/">Home</Link>
        </li>
        <li className="link">
          <Link to="/calculator">Calculator</Link>
        </li>
        <li className="link">
          <Link to="/quotes">Quote</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
