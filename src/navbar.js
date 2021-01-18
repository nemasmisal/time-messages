import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from './contexts/AuthContext';

const Navbar = () => {
  const { login } = useContext(AuthContext)
  return ( 
    <nav>
       <div className="nav-wrapper blue-grey">
         <Link to="/" className="brand-logo"> Text-Messages</Link>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
           <li><Link to="/chat-room" onClick={() => login('xfce')}>Login</Link></li>
           <li><Link to="/register">Register</Link></li>
           <li><Link to="/chat-room">Rooms</Link></li>
         </ul>
       </div>
     </nav>
   );
  }
export default Navbar;