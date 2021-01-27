const BASE_URL = 'http://localhost:3000/';

const login = async (body) => {
  try {
    const _res = await fetch(BASE_URL + 'api/auth/login', { method: 'POST',
         headers: { "Content-Type":"application/json" },
         body: JSON.stringify(body) 
        });
        const res = await _res.json()
    return res;
  } catch (error) { return { msg: error } }
}

const register = async (body) => {
  try {
    const _res = await fetch(BASE_URL + 'api/auth/register', { method: 'POST',
    headers: { "Content-Type":"application/json" },
    body: JSON.stringify(body) 
   });
   const res = await _res.json();
   return res;
  } catch (error) { return { msg: error } }
}

const logout = async () => {
  const res = await fetch(BASE_URL + 'api/auth/logout');
  return res;
}
export default { login, register, logout }