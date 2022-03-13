const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const verifyToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1];
  if(token == null) return res.sendStatus(401);
  jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
    if(err) return res.sendStatus(403);
    req.Email = decoded.Email;
    next();
  })
}

const express = require('express');
const router = express.Router();
const pool = require('./db.js');

router.get('/', verifyToken, async function(req,res){
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
      const salt = await bcrypt.genSalt();
      const hashPassword = await bcrypt.hash(data.password, salt);
      const sqlQuery = `INSERT INTO member VALUES ('','${data.name}','${data.birthDate}','${data.phone}','${data.email}', '${hashPassword}','','0')`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/login', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `SELECT * FROM member	WHERE Email = "${data.email}"`;
      const rows = await pool.query(sqlQuery);
      const match = await bcrypt.compare(req.body.password, rows[0].Password);
      if(!match) return res.status(400).json({msg: "Password tidak sesuai"});
      let userId = rows[0].memberID;
      let name = rows[0].Name;
      let email = rows[0].Email;
      let accessToken = jwt.sign({userId, name, email}, process.env.ACCESS_TOKEN_SECRET,{
          expiresIn: '20s'
      });
      const refreshToken = jwt.sign({userId, name, email}, process.env.REFRESH_TOKEN_SECRET,{
          expiresIn: '1d'
      });
      const sqlQueryToken = `UPDATE member SET refresh_token = "${refreshToken}" WHERE memberId = "${userId}"`;
      await pool.query(sqlQueryToken);
      res.cookie('refreshToken', refreshToken,{
          httpOnly: true,
          maxAge: 24 * 60 * 60 * 1000,
      });
      res.json({ accessToken });
    } catch (error) {
        res.status(404).json({msg:"Email tidak ditemukan"});
    }
})

router.get('/token', async function(req,res){
    try {
        const refreshToken = req.cookies.refreshToken;
        const sqlQuery = `SELECT * FROM member WHERE refresh_token = "${refreshToken}"`;
        const rows = await pool.query(sqlQuery);
        if(!rows[0]) return res.sendStatus(403);
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, decoded) => {
            if(err) return res.sendStatus(403);
            const memberID = rows[0].memberID;
            const name = rows[0].Name;
            const email = rows[0].Email;
            const accessToken = jwt.sign({memberID, name, email}, process.env.ACCESS_TOKEN_SECRET,{
                expiresIn: '15s'
            });
            res.json({ accessToken });
        });

    } catch (error) {
        res.status(400).send(error.message)
    }


});

router.delete('/logout', async function(req,res){
    try {
        const refreshToken = req.cookies.refreshToken;
        if(!refreshToken) return res.sendStatus(204);
        const sqlQuery = `SELECT * FROM member WHERE refresh_token = "${refreshToken}"`;
        const rows = await pool.query(sqlQuery);
        if(!rows[0]) return res.sendStatus(204);
        const userId = rows[0].memberID;
        const sqlQueryToken = `UPDATE member SET refresh_token = "" WHERE memberId = "${userId}"`;
        await pool.query(sqlQueryToken);
        res.clearCookie('refreshToken');
        return res.sendStatus(200);
    } catch (error) {
        res.status(400).send(error.message)
    }

});

router.post('/submittopik', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `INSERT INTO topikheader VALUES ('','${data.memberID}','${data.judul}','${data.thumbnail}','${data.jenistopik}', '${data.harga}', CURRENT_DATE())`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/submitpost', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `INSERT INTO postsdetail VALUES ('','${data.judul}','${data.deskripsi}','${data.linkvideo}','${data.jenispostingan}', '${data.harga}','${data.memberID}','${data.topikID}','${data.bagianID}')`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.post('/simpanbagian', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `INSERT INTO tblBagian VALUES ('','${data.topikID}','${data.namaBagian}')`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.post('/updatemember', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `
        UPDATE member
        SET profilephoto = '${data.profilImageName}', coverphoto = '${data.coverImageName}'
        WHERE memberID = ${data.memberID}`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/carikreator', async function(req,res){
    try {
        const sqlQuery = `SELECT memberID, Name, refresh_token, isCreator, CONCAT('${req.protocol}', "://", '${req.get("host")}', "/uploads/profil/", profilephoto) AS profilephoto, CONCAT('${req.protocol}', "://", '${req.get("host")}', "/uploads/cover/", coverphoto) AS coverphoto FROM member`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }


});

router.post('/memberphoto', async function(req,res){
    let data = req.body;
    try {
        const sqlQuery = `SELECT
        CONCAT('${req.protocol}', "://", '${req.get("host")}', "/uploads/profil/", profilephoto) AS profilephoto, CONCAT('${req.protocol}', "://", '${req.get("host")}', "/uploads/cover/", coverphoto) AS coverphoto
        FROM member WHERE memberID LIKE '${data.memberID}'`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }


});

router.get('/kreator/:id', async function(req,res){
    try {
        var id = req.params.id
        const sqlQuery = `SELECT * FROM member WHERE memberID = ${id}`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }


});

router.get('/topik/:memberID', async function(req,res){
    try {
        let memberID = req.params.memberID
        const sqlQuery = `SELECT topikID, memberID, judul, CONCAT('${req.protocol}', "://", '${req.get("host")}', "/uploads/", thumbnail) AS thumbnail, jenistopik, harga, createdAt FROM topikheader WHERE memberID = ${memberID}`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/topik/id/:topikID', async function(req,res){
    try {
        let topikID = req.params.topikID
        const sqlQuery = `SELECT * FROM topikheader WHERE topikID = ${topikID}`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/post/id/:postID', async function(req,res){
    try {
        let postID = req.params.postID
        const sqlQuery = `SELECT * FROM postsdetail WHERE postID = ${postID}`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/tampilkanBagian/:topikID', async function(req,res){
    try {
        let topikID = req.params.topikID
        const sqlQuery = `SELECT postID, judul, tblbagian.bagianID, namaBagian, tblbagian.topikID FROM postsdetail, tblbagian WHERE tblbagian.topikID = '${topikID}' AND tblbagian.bagianID = postsdetail.bagianID; `;
        const rows = await pool.query(sqlQuery);
        const objIds = rows.reduce((a, { namaBagian, bagianID, postID, judul }) => {
          a[bagianID] = a[bagianID] || {bagianID, postID: [], judul:[]}
          return {...a, ...{[bagianID]: {namaBagian, bagianID,
            postID: a[bagianID].postID.concat(postID),
            judul:a[bagianID].judul.concat(judul)}}}
        }, {})

        const result = Object.values(objIds)
        res.status(200).json(result);
        let newObject = Object.keys(result).reduce((acc, val) => {
          acc[val] = result[val].namaBagian;
          return acc;
}, {});
        console.log(newObject);

    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/tampilkanBagianKelas/:topikID', async function(req,res){
    try {
        let topikID = req.params.topikID
        const sqlQuery = `SELECT * FROM tblbagian WHERE topikID = '${topikID}'`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);

    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/tampilkanMateri/:bagianID', async function(req,res){
    try {
        let topikID = req.params.topikID
        const sqlQuery = `SELECT postID, judul, tblbagian.bagianID, namaBagian, tblbagian.topikID FROM postsdetail, tblbagian WHERE tblbagian.topikID = '${topikID}' AND tblbagian.bagianID = postsdetail.bagianID; `;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }

router.get('/following/:memberID', async function(req,res){
    try {
        let memberID = req.params.memberID
        const sqlQuery = `SELECT following.followingID, member.Name FROM member, following WHERE following.followingID = member.memberID AND following.memberID = "${memberID}"`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

// router.get('/tampilkanAkademi/:topikID/:bagianID', async function(req,res){
//     try {
//         let topikID = req.params.topikID
//         let bagianID = req.params.bagianID
//         const sqlQuery = `SELECT * FROM postsdetail WHERE topikID = ${topikID} AND bagianID = ${bagianID}`;
//         const rows = await pool.query(sqlQuery);
//         res.status(200).json(rows);
//     } catch (error) {
//         res.status(400).send(error.message)
//     }
// });




});

router.get('/creator/:name', async function(req,res){
    try {
        let name = req.params.name
        const sqlQuery = `SELECT * FROM member WHERE member.Name = "${name}"`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }


});
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
