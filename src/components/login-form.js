import React, { useState, useEffect, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';


const LoginForm = () => {
  const { login } = useContext(AuthContext);
  const history = useHistory();
  
  const handleNickname = (evt) => {
    evt.preventDefault();
    login(evt.target['temp-nickname'].value);
    history.push('/lobby')
  }
  return ( 
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
   );
}
 
export default LoginForm;