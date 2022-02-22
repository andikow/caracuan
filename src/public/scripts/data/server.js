const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
dotenv.config();

// Allow Origin Access
app.use((req, res, next)=>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
next();
})
// End Allow Origin Access

/**
* Middleware
*/
app.use(cors({ credentials:true, origin:'http://localhost:3001' }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

const PORT = process.env.PORT || '3000';

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
