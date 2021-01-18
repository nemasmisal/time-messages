import React, { createContext, useState } from 'react';

export const AuthContext = createContext();
const initialState = { nickname: 'anonymous',
   isCreator: false ,
   roomname: '' }
;
const AuthContextProvider = (props) => {
  const [auth, setAuth] = useState(initialState);

  const login = (name) => {
    const {isCreator, roomname } = auth;
    setAuth({ nickname: name, isCreator, roomname });
  };
  const logout = () => {
    setAuth(initialState);
  };

  const setRoom = (name) => {
    const {isCreator, nickname } = auth;
    setAuth({roomname: name, isCreator, nickname});
  };
  return (
    <AuthContext.Provider value={{ auth, login, logout, setRoom }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
