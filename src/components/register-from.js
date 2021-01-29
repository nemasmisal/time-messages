import { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import authService from '../services/auth-service';

const RegisterForm = () => {
  const history = useHistory();
  const { login } = useContext(AuthContext);
  const [nickname, setNickname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [isPending, setIsPending] = useState(false);
  const [body, setBody] = useState(null);
  
  useEffect(() => {
    const fetchData = async () => {
        const res = await authService.register(body);
        if(res.msg) { return; }
        login(nickname, res.id);
        setIsPending(false);
        history.push('/lobby');
    };
    if(body) { fetchData(); }
  }, [body, login, history, nickname])

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setIsPending(true);
    setBody({ username: nickname, email, password });
  };

  return (
    <form className="row s8" onSubmit={handleSubmit}>
      <h4>
        Register your permanent nickname and get the oportunity to create your
        own chat-room
      </h4>
      <div className="row">
        <div className="input-field col s6">
          <input
            id="nickname"
            placeholder="nickname"
            type="text"
            required
            className="validate"
            onChange={(evt) => setNickname(evt.target.value)}
          />
          <label htmlFor="nickname"></label>
        </div>
        <div className="input-field col s6">
          <input
            id="email"
            placeholder="email@email.com"
            type="text"
            required
            className="validate"
            onChange={(evt) => setEmail(evt.target.value)}
          />
          <label htmlFor="email"></label>
        </div>
      </div>
      <div className="row">
        <div className="input-field col s6">
          <input
            id="password"
            placeholder="password"
            type="password"
            required
            className="validate"
            onChange={(evt) => setPassword(evt.target.value)}
          />
          <label htmlFor="password"></label>
        </div>
        <div className="input-field col s6">
          <input
            id="repeatPassword"
            placeholder="repeat password"
            type="password"
            required
            className="validate"
          />
          <label htmlFor="repeatPassword"></label>
        </div>
      </div>
      {!isPending && <button
        className="btn waves-effect waves-light blue-grey"
        type="submit"
        name="action"
      >
        Submit
      </button>}
      {isPending && <button
        className="btn waves-effect waves-light blue-grey"
        type="submit"
        name="action"
      >
        Registering...
      </button>}
    </form>
  );
};

export default RegisterForm;
