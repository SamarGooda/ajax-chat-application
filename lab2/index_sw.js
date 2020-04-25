const express =require('express');
const cors = require('cors');
const http = require('http');
const socket = require('socket.io');



const app = express();
const server = http.createServer(app);

app.use(cors());
app.use(express.json());


const io = require('socket.io')(server);

io.on('connection', (client) => {
    console.log('new client');
    client.on(('message'),(data) => {
        console.log(data);
        io.emit('new-message' , data)
    }) 
})
server.listen(5000,() => {

    console.info('Server listening on port 5000');  

});