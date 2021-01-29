import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { wscActions, registerOnMsgCB } from '../websocket';
import { AuthContext } from '../contexts/AuthContext';
import { RoomContext } from '../contexts/RoomContext';
import roomService from '../services/room-service';

export const ChatRoom = () => {
  const { username } = useContext(AuthContext);
  const { getRoom, currentRoom, setCurrRoom } = useContext(RoomContext);
  const [msg, setMsg] = useState([{ msg: Date(), username: 'Conversation starts at', time: null }]);

  const sendMsg = (evt) => {
    evt.preventDefault();
    const inputMsg = evt.target.message.value;
    wscActions.send(
      JSON.stringify({
        action: 'onmsg',
        payload: { username, msg: inputMsg, roomname: currentRoom },
      })
    );
    evt.target.message.value = '';
  };

  const recieveMsg = (data) => {
    const res = JSON.parse(data);
    const message = Object.assign(res, { time: Date.now() });
    setMsg([...msg, message]);
  };

  const leaveRoom = async () => {
    wscActions.send(
      JSON.stringify({
        action: 'onleave',
        payload: { username, roomname: currentRoom, msg:'has left the room'}
      })
    );
    const room = getRoom(currentRoom);
    setCurrRoom(null);
    await roomService.leaveRoom({ username, roomId: room._id });
    return
  }

  registerOnMsgCB(recieveMsg);
  
  useEffect(() => {
    if (wscActions.send) {
      wscActions.send(
        JSON.stringify({
          action: 'onjoin',
          payload: { username , msg: 'has join the room', roomname: currentRoom }
        })
      )
    }
  }, [currentRoom, username]);

  useEffect(() => {}, [msg])

  return (
    <div className="chatroom hidden">
      <ul className="chat-list">
        {msg.map((m) => {
          return (
            <li key={m.time}>
              {m.username}: {m.msg}
            </li>
          );
        })}
      </ul>
      <form className="chat-form" onSubmit={sendMsg}>
        <input
          type="text"
          name="msg"
          placeholder="Type your message..."
          id="message"
        />
        <button type="submit">SEND</button>
      </form>
      <button className="leaveBtn" onClick={leaveRoom}><Link to="/lobby">Leave</Link></button>
    </div>
  );
};