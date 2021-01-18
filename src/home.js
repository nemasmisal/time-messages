import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';

const Home = () => {
  const history = useHistory();
  const { login } = useContext(AuthContext);
  const handleNickname = (evt) => {
    evt.preventDefault();
    login(evt.target['temp-nickname'].value);
    history.push('/lobby')
  }
  return (
    <div className="col">
      <form className="row s8">
        <h4>Register your permanent nickname</h4>
        <div className="row">
          <div className="input-field col s6">
            <input id="nickname" type="text" className="validate" />
            <label htmlFor="nickname">Nickname</label>
          </div>
          <div className="input-field col s6">
            <input id="email" type="text" className="validate" />
            <label htmlFor="email">Email</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="password" type="password" className="validate" />
            <label htmlFor="password">Password</label>
          </div>
        </div>
        <div className="row">
          <div className="input-field col s12">
            <input id="repeatPassword" type="password" className="validate" />
            <label htmlFor="repeatPassword">Repeat Password</label>
          </div>
        </div>
        <button className="btn waves-effect waves-light blue-grey" type="submit" name="action">Submit</button>
      </form>
      <form className="row s8" onSubmit={handleNickname}>
        <h4>Enter the chat with temporaly nickname</h4>
        <div className="row">
          <div className="input-field col s6">
            <input id="temp-nickname" type="text" className="validate" />
            <label htmlFor="temp-nickname"></label>
          </div>
        </div>
        <button className="btn waves-effect waves-light blue-grey" type="submit" name="action">Submit</button>
      </form>
    </div>
  );
};

export default Home;