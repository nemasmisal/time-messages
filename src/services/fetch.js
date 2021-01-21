import { useState, useEffect } from 'react';

const FetchData = (url, method, body) => {
    const [data, setData] = useState(null);
    const [err, setErr] = useState(null);

  useEffect(async () => {
    const headers = {
      method: method,
      headers: {
          'Content-type': 'application/json'
      },
      body: JSON.stringify(body)
  }

  try {
      const _res = await fetch(url, headers);
      if (!_res.ok) { throw new Error('Request failed.'); };
      const response = await response.json();
      setData(response);
      return response;
  } catch (error) { 
    setErr(error.message)
   }

  },[url])
  return data || err;
}
 
export default FetchData;