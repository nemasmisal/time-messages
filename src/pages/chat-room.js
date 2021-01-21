import React, { useState, useEffect, useContext } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { wscActions, registerOnMsgCB } from '../websocket';

export const ChatRoom = () => {
  const { auth } = useContext(AuthContext);
  const [msg, setMsg] = useState([{ msg: Date(), username: 'Conversation starts at', time: null }]);

  const sendMsg = (evt) => {
    evt.preventDefault();
    const inputMsg = evt.target.message.value;
    const {roomname, nickname } = auth;
    wscActions.send(
      JSON.stringify({
        action: 'onmsg',
        payload: { username: nickname, msg: inputMsg, roomname },
      })
    );
    evt.target.message.value = '';
  };

  const recieveMsg = (data) => {
    const res = JSON.parse(data);
    const message = Object.assign(res, { time: Date.now() });
    setMsg([...msg, message]);
  };

  registerOnMsgCB(recieveMsg);
  
  useEffect(() => {
    if (wscActions.send) {
      wscActions.send(
        JSON.stringify({
          action: 'onjoin',
          payload: { username: auth.nickname, msg: 'has join the room', roomname: auth.roomname }
        })
      )
    }
  }, [auth]);

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
      <button className="leaveBtn">Leave</button>
    </div>
  );
};