import React, { createContext, useState } from 'react';

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [isLogged, setIsLogged] = useState(false);
  const [userId, setUserId] = useState(null);
  const [roomName, setRoomName] = useState(null);
  const [username, setUsername] = useState(null);
  const [toggleLoginForm, setToggleLoginForm] = useState(false);
  const login = (name, id) => {
    setIsLogged(true);
    setUsername(name);
    setUserId(id);
  };
  const logout = () => {
    setIsLogged(false);
    setUserId(null);
    setUsername(null);
  };

  const toggleLogin = () => {
    setToggleLoginForm(!toggleLoginForm);
  }

  const setRoom = (name) => {
    setRoomName(name);
  };
  return (
    <AuthContext.Provider value={{ isLogged, userId, roomName, username, toggleLoginForm, login, logout, setRoom, toggleLogin }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
