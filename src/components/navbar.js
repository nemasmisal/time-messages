import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import authService from '../services/auth-service';

const Navbar = () => {
  const { toggleLogin, toggleLoginForm, userId, username, logout } = useContext(AuthContext);
  const history = useHistory();

  const btnHandler = () => {
    toggleLogin()
  }
  const logoutHandler = async () => {
    await authService.logout();
    logout();
    history.push('/');
  }
  return ( 
    <nav>
       <div className="nav-wrapper blue-grey">
         <Link to="/" className="brand-logo"> Text-Messages</Link>
           {username && <p className="right">{username}</p>}
           {userId && <button className="waves-effect waves-light btn-small right" onClick={logoutHandler}>Log Out</button>}
           {!username && 
         <ul id="nav-mobile" className="right hide-on-med-and-down">
           {!toggleLoginForm && <li onClick={btnHandler}><Link to="" className="waves-effect waves-light btn-small">Use your nickname</Link></li>}
           {toggleLoginForm && <li onClick={btnHandler}><Link to="" className="waves-effect waves-light btn-small">Use Temporary nickname</Link></li>}
         </ul> }
       </div>
     </nav>
   );
  }
export default Navbar;