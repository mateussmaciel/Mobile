import socketio from 'socket.io-client'

//trocar o endereço de acordo com o ip de onde está sendo publicado
const socket = socketio('', {
    autoConnect:false
});

function sucbscribeToNewDev(subscribeFunction){
    socket.on('new-dev', subscribeFunction);
}

function connect(latitude, longitude, techs){
    socket.io.opts.query = {
        latitude,
        longitude,
        techs
    }
    socket.connect()
}

function disconnect(){
    if(socket.connected){
        socket.disconnect()
    }
}

export {
    connect, 
    disconnect,
    sucbscribeToNewDev
}