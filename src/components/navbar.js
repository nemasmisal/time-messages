import { Link, useHistory } from 'react-router-dom';
import { useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import authService from '../services/auth-service';
import styles from './navbar.module.css';

const Navbar = () => {
  const { toggleLogin, toggleLoginForm, userId, username, logout } = useContext(AuthContext);
  const history = useHistory();

  const btnHandler = () => {
    toggleLogin()
  }
  const logoutHandler = async () => {
    if(userId) {
      await authService.logout();
    }
    logout();
    history.push('/');
  }
  return ( 
    <nav className={styles.nav}>
       <div className={styles.wrapper}>
         <h1>
         <Link to="/">T-M</Link>
         </h1>
           {username && <h4>{username}</h4>}
           <div className={styles.btn}>
           {username && <button className="waves-effect waves-light btn" onClick={logoutHandler}>Log Out</button>}
           </div>
           {!username && 
         <div className={styles.btn}>
           {!toggleLoginForm && <button onClick={btnHandler} className="waves-effect waves-light btn">Use your nickname</button>}
           {toggleLoginForm && <button onClick={btnHandler} className="waves-effect waves-light btn">Use Temporary nickname</button>}
         </div> }
       </div>
     </nav>
   );
  }
export default Navbar;