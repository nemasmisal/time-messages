import React, { useContext ,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from './contexts/AuthContext';
import { startWSC } from './websocket';

const Lobby = () => {
  const { setRoom } = useContext(AuthContext);
  
  useEffect(() => {
    startWSC();
    
  }, []);
  const joinRoom = async () => {
    setRoom('Main');
  }
  return ( 
    <div className="row">
    <div className="col s12 m6">
      <div className="card blue-grey darken-1">
        <div className="card-content white-text">
          <span className="card-title">Main</span>
          <p>Main room for general subject chats</p>
        </div>
        <div className="card-action">
          <Link to="/chat-room" onClick={joinRoom}>Join</Link>
        </div>
      </div>
    </div>
  </div>
   );
}
 
export default Lobby;
