const express =require('express');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());console.log('new client')

//may be object
const subscribers = [];



// send res (header) to know the type & way will be sent 
//"text/event-stream" to determine ===> Content-Type 
app.get('/messages',(req,res) => { 
    subscribers.push(res);
    res.writeHead(200,{
        'Content-Type': 'text/event-stream', 
     });
}); 
//to send data to all and keep the open seccion with client
app.post('/messages',(req,res) =>{
    const { body } = req ;
    subscribers.forEach((s) => s.write( `data: ${JSON.stringify(body)}\n\n`));
    res.status(204).end();
 });

app.listen(5000,() => {

    console.info('Server listening on port 5000');  

});




