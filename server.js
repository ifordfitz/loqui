const express = require('express');
const app = express();
const mongoose = require('mongoose');
const db = mongoose.connection

const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/videos'

// Connect to Mongo
mongoose.connect(mongoURI, { useNewUrlParser: true },
  () => console.log('MongoDB connection established:', mongoURI)
)

// Error / Disconnection
db.on('error', err => console.log(err.message + ' is Mongod not running?'))
db.on('disconnected', () => console.log('mongo disconnected'))

app.use(express.urlencoded({ extended: true }));
app.use(express.json());


const youtubeController = require('./controllers/youtube.js');
app.use('/', youtubeController);


app.listen(3000, ()=>{
    console.log('listening...');
});
