const express = require('express'); //backend framework
const mongoose = require('mongoose');// helps us to interact with MongoDB database
const bodyParser = require('body-parser'); //allows us to take request and get data from the body

const products = require('./routes/api/products');
const userRoutes = require('./routes/api/userRoutes');
const gallery = require('./routes/api/gallery');
const { notFound, errorHandler } = require('./middlewares/errorMiddleware');
const cors = require("cors");

const app = express(); //initialize express

//Bodyparser Middleware
app.use(bodyParser.json());

app.use(cors());

// DB Config
const db = require('./config/keys').mongoURI;

// Connect to Mongo
mongoose
   .connect(db)
   .then(() => console.log('MongoDB Connected...'))
   .catch(err => console.log(err));

//Use Routes
app.use('/api/users', userRoutes);
app.use('/api/products', products);
app.use('/api/gallery', gallery);

//pt a afisa mesajul de erore in postman, daca exista
app.use(notFound);
app.use(errorHandler);

const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));

