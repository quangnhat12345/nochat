const express = require('express')
const app = express()

const http = require('http')
const server = http.createServer(app)
const {
    Server, Socket
} = require('socket.io')

const io = new Server(server)

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

io.on('connection', (Socket) => {
    console.log('user connected')
    Socket.on('on-chat', data => {
        io.emit('user-chat', data)
        })
    })

server.listen(3000, () => {
    console.log('listening on port 3000')
})