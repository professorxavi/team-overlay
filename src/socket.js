const io = require('socket.io-client')

export default function () {
  const socket = io.connect(process.env.REACT_APP_SOCKETURL)

  function updateTeam(onMessageReceived) {
    socket.on('show team', onMessageReceived)
  }

  function hideTeam(onMessageReceived) {
    socket.on('hide team', onMessageReceived)
  }

  function showTeam(onMessageReceived) {
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
    hideTeam,
    showTeam,
    unregisterHandler
  }
}
