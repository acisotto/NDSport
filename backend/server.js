require('dotenv').config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const uri = process.env.DB_URI;
mongoose.connect(uri,{useUnifiedTopology:true,useNewUrlParser:true});

const connection = mongoose.connection;
connection.once('open',()=>{
    console.log(`Conexão mongoose realizada com sucesso!`);
});




const app = express();
const port = process.env.PORT || 5000;



app.use(cors());
app.use(express.json());


const eventRouter =  require('./routes/event');

app.use('/events',eventRouter);

app.listen(port,()=>{
    console.log(`Ouvindo porta: ${port}`);
});