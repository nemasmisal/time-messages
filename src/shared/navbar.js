import { Link } from 'react-router-dom';
import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';


const Navbar = () => {
  const { loginBtn, loginBtnHandler } = useContext(AuthContext);
  const loginHandler = () => {
    loginBtnHandler()
  }
  return ( 
    <nav>
       <div className="nav-wrapper blue-grey">
         <Link to="/" className="brand-logo"> Text-Messages</Link>
         <ul id="nav-mobile" className="right hide-on-med-and-down">
           {!loginBtn && <li onClick={loginHandler}><a class="waves-effect waves-light btn-small">Login</a></li>}
           {loginBtn && <li onClick={loginHandler}><a class="waves-effect waves-light btn-small">Use Temporary nickname</a></li>}
         </ul>
       </div>
     </nav>
   );
  }
export default Navbar;