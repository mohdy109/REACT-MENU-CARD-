const { Socket } = require('engine.io')

const io  = require('socket.io')(8000)
const user = {}
io.on('connection', Socket => {
    socket.on('new-user-joined', name =>{
        user[ socket.id] = name;
        socket.broadcast.emit()
    })
})
socket.on('send',message=>{
    socket .broadcast.emit("message sent",{messgaee:message,name:user[socket.id]})})
