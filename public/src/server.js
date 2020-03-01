import { useGlobal } from 'reactn'
import Logger from './utils/Log'
import { message } from 'antd'

const log = Logger('Server')

let socket

export function connect () {
  socket = new WebSocket('ws://pc.galax.be:8080/ws')
  socket.onmessage = processMessage

  socket.onopen = () => {
    // send('login')
  }

  socket.onerror = (msg) => {
    log.error(msg)
  }

  socket.onclose = () => {
    log.warn('Socket closed, trying to reconnect')
    connect()
  }
}

export function loggin (user) {
  send('login', { email: user.email, password: user.password })
}

export function register (user) {
  send('register', { email: user.email, name: user.name, password: user.password })
}

export function send (command, payload = '') {
  // CONNECTING OPEN CLOSING or CLOSED
  if (socket.readyState === WebSocket.OPEN) {
    log.info('Sending ' + command)
    socket.send(JSON.stringify({
      command: command,
      payload: JSON.stringify(payload)
    }))
  } else {
    log.error('Error when sending ' + command + '. The state of the socket is ' + socket.readyState)
  }
}

function processMessage (msg) {
  const { command, payload } = JSON.parse(msg.data)
  switch (command) {
    case 'logged':
    // TODO: set user
      log.info('Logged')
      break
    case 'error':
      message.error(payload)
      break
    default:
      log.error('Unkown command:', command)
  }
}
