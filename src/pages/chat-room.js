import React, { useState, useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { wscActions, registerOnMsgCB } from '../websocket';

export const ChatRoom = () => {
  const { username, roomname } = useContext(AuthContext);
  const [msg, setMsg] = useState([{ msg: Date(), username: 'Conversation starts at', time: null }]);

  const sendMsg = (evt) => {
    evt.preventDefault();
    const inputMsg = evt.target.message.value;
    wscActions.send(
      JSON.stringify({
        action: 'onmsg',
        payload: { username, msg: inputMsg, roomname },
      })
    );
    evt.target.message.value = '';
  };

  const recieveMsg = (data) => {
    const res = JSON.parse(data);
    const message = Object.assign(res, { time: Date.now() });
    setMsg([...msg, message]);
  };

  const leaveRoom = () => {
    wscActions.send(
      JSON.stringify({
        action: 'onleave',
        payload: { username, roomname, msg:'has left the room'}
      })
    );
  }

  registerOnMsgCB(recieveMsg);
  
  useEffect(() => {
    if (wscActions.send) {
      wscActions.send(
        JSON.stringify({
          action: 'onjoin',
          payload: { username , msg: 'has join the room', roomname }
        })
      )
    }
  }, []);

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