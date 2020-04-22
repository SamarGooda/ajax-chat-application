const express =require('express');
const cors = require('cors');
const app = express();


app.use(express.json());
app.use(cors());

const messages = [];


app.post('/message',(req,res) =>{
    // console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh1")
   const { body } = req ;
   messages.push(body);
   res.status(204).end();
});


app.get('/message',(req,res) => { 
    // console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh2")
   res.json(messages);
}); 
// #############################################################
const subscribes ={}

app.post('/long',(req,res) =>{
   const { body } = req ;

   Object.keys(subscribes).forEach((id) => {
     subscribes[id].json(body);
     delete subscribes[id];
}); 
   res.status(204).end();
}); 


app.get('/long',(req,res) => { 
    const id = Math.ceil(Math.random() * 100000);
    subscribes[id]=res;
}); 


app.listen(3000,() => {
    // console.log("hhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhhh3")
    console.info('Server listening on port 3000');  

});



