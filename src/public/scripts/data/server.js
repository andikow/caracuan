const express = require('express');
const dotenv = require('dotenv');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require("multer");
const path = require("path");

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
app.use(cors({ credentials:true, origin:'http://localhost:3000' }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static(path.resolve('./public')));

const PORT = process.env.PORT || '4000';

/**
* Storage
*/

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./public/uploads");
  },
  filename: function (req, file, cb) {
    cb(
      null,
      path.parse(file.originalname).name +
      "-" +
      Date.now() +
      path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage: storage });

app.post(`/api/upload`, upload.single("photo"), (req, res) => {
  // save filename nya ke database
  // return url ke user

  let finalImageURL =
  req.protocol + "://" + req.get("host") + "/uploads/" + req.file.filename;
  let imageName = req.file.filename;

  res.json({
    image: finalImageURL,
    imageName:imageName,
   });
});

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
