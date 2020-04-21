const express =require('express');
const cors = require('cors');
const app = express();


app.use(express.json());








app.listen(5000,(req , res) => {
    console.info('Server listening on port 5000');
    

});



