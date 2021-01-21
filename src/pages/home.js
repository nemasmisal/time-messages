import React, {  } from 'react';
import LoginForm from '../components/login-form';
import RegisterForm from '../components/register-from';

export const Home = () => {
  return (
    <div className="col">
      <RegisterForm />
      <h2>OR</h2>
      <LoginForm />
    </div>
  );
};