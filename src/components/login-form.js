import { useState, useContext, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import authService from '../services/auth-service';


const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const history = useHistory();
  const { toggleLoginForm } = useContext(AuthContext);
  const [loginName, setLoginName] = useState(null);
  const [password, setPassword] = useState(null);
  const [body, setBody] = useState(null);
  const [isPending, setIsPending] = useState(false);

  useEffect(() => {
    async function fecthData() {
      const res = await authService.login(body);
      if(res.msg) { return; }
      login(res.username, res.id);
      setIsPending(false);
      history.push('/lobby')
    }
    if(body) { fecthData(); }
  }, [body])
  
  const handleNickname = (evt) => {
    evt.preventDefault();
    setIsPending(true);
    if(!password) {
      const tempNickname = loginName + Date.now();
      login(tempNickname, null);
      history.push('/lobby');
      return;
    }
    setBody({ email: loginName, password })
  }

  return ( 
    <form className="row s8" onSubmit={handleNickname}>
        {!toggleLoginForm && <h4>Enter the chat with temporary nickname</h4>}
        {toggleLoginForm && <h4>Please provide your email and password</h4>}
        <div className="row">
          <div className="input-field col s6">
            <input id="loginname"
            placeholder="email/nickname"
             type="text"
             required
             className="validate"
             onChange={(evt) => setLoginName(evt.target.value)}/>
            <label htmlFor="loginname"></label>
          </div>
          {toggleLoginForm && <div className="input-field col s6">
          <input
            id="login-password"
            placeholder="password"
            type="password"
            required
            className="validate"
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <label htmlFor="login-password"></label>
        </div>}
        </div>
      {isPending && <button disable="true" className="btn waves-effect waves-light blue-grey" type="submit" name="action">Submiting..</button>}
      {!isPending && <button className="btn waves-effect waves-light blue-grey" type="submit" name="action">Submit</button>}
      </form>
   );
}
 
export default LoginForm;