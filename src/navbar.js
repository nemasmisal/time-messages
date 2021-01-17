import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
  <nav>
  <div className="nav-wrapper blue-grey">
    <Link to="/" className="brand-logo"> Text-Messages</Link>
    <ul id="nav-mobile" className="right hide-on-med-and-down">
      <li><Link to="/login">Login</Link></li>
      <li><Link to="/register">Register</Link></li>
      <li><Link to="/chat-room">Rooms</Link></li>
    </ul>
  </div>
</nav>
  );
}

export default Navbar;