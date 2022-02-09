const express = require('express');
const router = express.Router();
const pool = require('./db.js');


router.get('/', async function(req,res){
    try {
        const sqlQuery = 'SELECT * FROM following';
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }


});

router.post('/register', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `INSERT INTO member VALUES ('','${data.name}','${data.birthDate}','${data.phone}','${data.email}', '${data.password}','0')`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/login', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `SELECT Password FROM member	WHERE Email = "${data.email}"`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

// router.post('/login', async function(req,res) {
//     try {
//         const {id,password} = req.body;
//
//         const sqlGetUser = 'SELECT password FROM user WHERE id=?';
//         const rows = await pool.query(sqlGetUser,id);
//         if(rows){
//
//             const isValid = await bcrypt.compare(password,rows[0].password)
//             res.status(200).json({valid_password: isValid});
//         }
//         res.status(200).send(`User with id ${id} was not found`);
//
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// })

module.exports = router;
