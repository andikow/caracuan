const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser')

const app = express();
dotenv.config();

// Allow Origin Access
app.use((req, res, next)=>{
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, DELETE, PUT, PATCH, OPTIONS')
    if(req.method == 'OPTIONS'){
        res.setHeader('Access-Control-Allow-Headers', 'Accept, Content-Type, X-Requested-With, Authorization')
        return res.status(200).json({})
    }
    next()
})
// End Allow Origin Access

/**
* Middleware
*/
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
