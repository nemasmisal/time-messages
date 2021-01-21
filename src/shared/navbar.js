import { Link } from 'react-router-dom';
import React from 'react';

const Navbar = () => {
  return ( 
    <nav>
       <div className="nav-wrapper blue-grey">
         <Link to="/" className="brand-logo"> Text-Messages</Link>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
           <li><Link to="/chat-room">Login</Link></li>
         </ul>
       </div>
     </nav>
   );
  }
export default Navbar;