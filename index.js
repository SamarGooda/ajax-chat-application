const express =require('express');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());

const messages = [];


// app.post('/messages',(req,res) =>{
//    const { body } = req ;
//    messages.push(body);
//    res.status(204).end();
// });


// app.get('/messages',(req,res) => { 
    
//    res.json(messages);
// }); 
// #############################################################
const subscribers ={}

app.post('/long',(req,res) =>{
   const { body } = req ;

   Object.keys(subscribers).forEach( id => {
      subscribers[id].json(body);
     delete subscribers[id];
}); 
   res.status(204).end();
}); 


app.get('/long',(req,res) => { 
    const id = Math.ceil(Math.random() * 100000);
    subscribers[id]=res;
}); 


app.listen(5000,() => {

    console.info('Server listening on port 5000');  

});



