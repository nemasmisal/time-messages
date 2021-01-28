const BASE_URL = 'http://localhost:3000/';
const allRooms = async () => {
  try { 
    const _res = await fetch(BASE_URL + 'api/room/allRooms');
    const res = await _res.json();
    return res;
  } catch (error) { return { msg: error } }
}

const createRoom = async (body) => {
  try {
    const _res = await fetch(BASE_URL + 'api/room/createRoom', { method: 'POST',
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify(body) 
   });
   const res = await _res.json();
   return res;
  } catch (error) { return { msg: error } }
}

export default { allRooms, createRoom }