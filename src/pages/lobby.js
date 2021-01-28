import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { startWSC } from '../websocket';
import roomService from '../services/room-service';

export const Lobby = () => {
  const { setRoom } = useContext(AuthContext);
  const [rooms, setRooms] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await roomService.allRooms();
      if (data.msg) {
        return;
      }
      setRooms(data);
    };
    fetchData();
  }, [rooms]);

  useEffect(() => {
    startWSC();
  }, []);
  const joinRoom = async (name) => {
    setRoom(name);
  };
  return (
    <div className="room-list">
      {rooms?.map((room) => (
        <div className="row">
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text" key={room.id}>
                <span className="card-title">{ room.name }</span>
                <p>About: { room.description }</p>
                <p>Author: { room.owner.username }</p>
                <p>Total users in the room: { room.users.length }</p>
              </div>
              <div className="card-action">
                <Link to="/chat-room" onClick={() => joinRoom(room.name)}>
                  Join
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};
