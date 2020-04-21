const express =require('express');
const cors = require('cors');
const app = express();


app.use(express.json());
const messages = [];






app.post('/message',(req,res) =>{
   const { body } = req ;
   messages.push(body);
   res.status(204).end();
});


app.get('/message',(req,res) => { 
   res.json(messages);
}); 


app.listen(3000,() => {
    console.info('Server listening on port 5000');
    

});



