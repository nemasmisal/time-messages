import React, { useState } from 'react';
import FetchData from '../services/fetch';




const RegisterForm = () => {
  
  const [nickname, setNickname] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [repeatPassword, setRepeatPassword] = useState();
  const [isPending, setIsPending] = useState(false);
  
  const handleSubmit = async (evt) => {
    evt.preventDefault();
    setIsPending(true);
    const body = { nickname, email, password }
    const response = await FetchData('http', 'POST' , body);
    console.log(response);
    setIsPending(false);
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
        <div className="input-field col s12">
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
      </div>
      <div className="row">
        <div className="input-field col s12">
          <input
            id="repeatPassword"
            placeholder="repeat password"
            type="password"
            required
            className="validate"
            onChange={(evt) => setRepeatPassword(evt.target.value)}
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
