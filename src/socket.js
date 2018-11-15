const io = require('socket.io-client')

export default function () {
  const socket = io.connect('http://tauntaun.net:4000')

  function updateTeam(onMessageReceived) {
    socket.on('update team', onMessageReceived)
  }

  function unregisterHandler() {
    socket.off('message')
  }

  socket.on('error', function (err) {
    console.log('received socket error:')
    console.log(err)
  })

  return {
    updateTeam,
    unregisterHandler
  }
}
