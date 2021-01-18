const host = 'ws://localhost:8000/ws';
//wsc - web socket connection
export const wscActions = {
  send: null,
  recieve: null
}

export const startWSC = () => {
  const ws = new window.WebSocket(host)

  ws.onopen = () => {
    console.log('opened ws connection')
    wscActions.send = ws.send.bind(ws)
  }
  ws.onclose = (evt) => {
    console.log('close ws connection: ', evt.code, evt.reason)
  }
  ws.onmessage = (evt) => {
    wscActions.recieve && wscActions.recieve(evt.data)
  }
}

export const registerOnMsgCB = (fn) => {
  wscActions.recieve = fn
}