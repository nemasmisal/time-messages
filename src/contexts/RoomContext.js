import { createContext, useState } from 'react';

export const RoomContext = createContext();

const RoomContextProvider = (props) => {
  const [rooms, setAllRooms] = useState([]);
  const [currentRoom, setCurrentRoom] = useState(null);

  const setRooms = (allRooms) => {
    setAllRooms([...rooms,...allRooms]);
  }

  const getRoom = (name) => {
    return rooms.find(r => r.name === name);
  }

  const setCurrRoom = (name) => {
    setCurrentRoom(name);
  }

  return (
    <RoomContext.Provider value={{ rooms, currentRoom, setRooms, getRoom, setCurrRoom }}>
      {props.children}
    </RoomContext.Provider>
  );
};

export default RoomContextProvider;