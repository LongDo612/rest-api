const express = require('express');

const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const mongoose = require('mongoose')
require('dotenv/config');

app.use(cors());
app.use(bodyParser.json()); 

//import routes
const postsRouter = require('./routes/posts');
app.use('/posts', postsRouter);

//create some routes
app.get('/', (req, res) => {
    res.send('we are on home');
});

//connec to the server (DBMongo)
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true, useUnifiedTopology: true } ,() => {
    console.log('connected to DB');
});



//listen to the server
app.listen(3000);


