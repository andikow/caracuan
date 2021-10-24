const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const PORT = process.env.PORT || '3000';

const app = express();


/**
 * Middleware
 */
app.use(express.json());
app.use(express.urlencoded({extended:false}));

/**
 * Routes
 */

app.get('/', (request, response) => {
    response.status(200).send("This is not why you're here. Head to /user/:id and replace :id with your user id")
})

const userRouter = require('./user.js');
app.use('/user',userRouter);

/**Start listening */
app.listen(PORT, () => {
    console.log(`Listening for requests on port ${PORT}`)
})
