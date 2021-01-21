import { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const history = useHistory();
  const { loginBtn } = useContext(AuthContext);
  const [nickname, setNickname] = useState(null);
  const [password, setPassword] = useState(null)
  
  const handleNickname = (evt) => {
    evt.preventDefault();
    login();
    history.push('/lobby');
  }
  return ( 
    <form className="row s8" onSubmit={handleNickname}>
        {!loginBtn && <h4>Enter the chat with temporary nickname</h4>}
        {loginBtn && <h4>Please provide your nickname and password</h4>}
        <div className="row">
          <div className="input-field col s6">
            <input id="nickname"
             type="text"
             required
             className="validate"
             onChange={(evt) => setNickname(evt.target.value)}/>
            <label htmlFor="nickname"></label>
          </div>
        </div>
        <div className="row">
        {loginBtn && <div className="input-field col s12">
          <input
            id="password"
            placeholder="password"
            type="password"
            required
            className="validate"
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <label htmlFor="password"></label>
        </div>}
      </div>
        <button className="btn waves-effect waves-light blue-grey" type="submit" name="action">Submit</button>
      </form>
   );
}
 
export default LoginForm;