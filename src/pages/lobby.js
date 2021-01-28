import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { RoomContext } from '../contexts/RoomContext';
import { startWSC } from '../websocket';
import roomService from '../services/room-service';
import { AuthContext } from '../contexts/AuthContext';

export const Lobby = () => {
  const { username } = useContext(AuthContext);
  const { rooms, setRooms, getRoom, setCurrRoom } = useContext(RoomContext);
  
  useEffect(() => {
    const fetchData = async () => {
      const data = await roomService.allRooms();
      if (data.msg) { return; }
      setRooms(data);
    };
    fetchData();
  }, []);

  useEffect(() => {
    startWSC();
  }, []);
  const join = async (name) => {
    setCurrRoom(name);
    const room = getRoom(name);
    const body = { username, roomId: room._id };
    await roomService.joinRoom(body);
    return;
  };

  return (
    <div className="room-list">
      {rooms?.map((room) => (
        <div className="row" key={room._id}>
          <div className="col s12 m6">
            <div className="card blue-grey darken-1">
              <div className="card-content white-text">
                <span className="card-title">{ room.name }</span>
                <p>About: { room.description }</p>
                <p>Author: { room.owner.username }</p>
                <p>Total users in the room: { room.users.length }</p>
              </div>
              <div className="card-action">
                <Link to="/chat-room" onClick={() => join(room.name)}>
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
