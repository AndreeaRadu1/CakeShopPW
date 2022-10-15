const express = require('express'); //backend framework
const mongoose = require('mongoose');// helps us to interact with MongoDB database
const bodyParser = require('body-parser'); //allows us to take request and get data from the body

const products = require('./routes/api/products');

const app = express(); //initialize express

//Bodyparser Middleware
app.use(bodyParser.json());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
   .connect(db)
   .then(() => console.log('MongoDB Connected...'))
   .catch(err => console.log(err));

//Use Routes
app.use('/api/products', products);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

