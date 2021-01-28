const BASE_URL = 'http://localhost:3000/';
const headers =  {
post(body) {
  return { method: 'POST',
  headers: { "Content-Type":"application/json" },
  body: JSON.stringify(body) 
 }
}
}
const allRooms = async () => {
  try { 
    const _res = await fetch(BASE_URL + 'api/room/allRooms');
    const res = await _res.json();
    return res;
  } catch (error) { return { msg: error } }
}

const createRoom = async (body) => {
  try {
    const _res = await fetch(BASE_URL + 'api/room/createRoom', headers.post(body) );
   const res = await _res.json();
   return res;
  } catch (error) { return { msg: error } }
}

const joinRoom = async (body) => {
  try {
    const _res = await fetch(BASE_URL + 'api/room/joinRoom', headers.post(body));
    const res = await _res.json();
    return res;
  } catch (error) { return { msg: error } }
}

const leaveRoom = async (body) => {
  try {
    const _res = await fetch(BASE_URL + 'api/room/leaveRoom', headers.post(body));
    const res = await _res.json();
    return res;
  } catch (error) { return { msg: error } }
}
export default { allRooms, createRoom, joinRoom, leaveRoom }