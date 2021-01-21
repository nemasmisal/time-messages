import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [roomName, setRoomName] = useState(null);
  const [loginBtn, setLoginBtn] = useState(false);

  const loginBtnHandler = () => {
    setLoginBtn(!loginBtn);
  }

  const login = () => {
    setIsLogged(true);
  };
  const logout = () => {
    setIsLogged(false);
  };

  const room = (name) => {
    setRoomName(name);
  };
  return (
    <AuthContext.Provider value={{ isLogged, roomName, loginBtn, login, logout, room, loginBtnHandler }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
