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
const Xendit = require('xendit-node');
const x = new Xendit({ secretKey: process.env.REACT_XENDIT_API_KEY });

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

// Akun
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

router.post('/datarekening', async function (req,res){
  try {
    let data = req.body;
    const sqlQuery = `SELECT * FROM payoutaddress WHERE memberID = '${data.memberID}'`;
    const rows = await pool.query(sqlQuery);
    res.status(200).json(rows);
  } catch (error) {
    res.status(400).send(error.message)
  }
});

router.post('/simpanrekening', async function (req,res){
  try {
    let data = req.body;
    const sqlQuery = `INSERT INTO payoutaddress VALUES ('${data.memberID}','${data.bankCode}','${data.bankName}','${data.namaPemilik}','${data.nomorRekening}')`;
    const rows = await pool.query(sqlQuery);
    res.status(200).json(rows);
  } catch (error) {
    res.status(400).send(error.message)
  }
});

router.get('/isanalyst/:memberID', async function(req,res){
    try {
        let memberID = req.params.memberID
        const sqlQuery = `SELECT isAnalyst FROM member WHERE memberID = "${memberID}"`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/member/:memberID', async function(req,res){
    try {
        let memberID = req.params.memberID
        const sqlQuery = `SELECT name FROM member WHERE memberID = "${memberID}"`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/kelasdibeli/:memberID', async function(req,res){
    try {
        let memberID = req.params.memberID
        const sqlQuery = `
        SELECT memberpurchase.kelasID, member.name, kelas.judul, kelas.thumbnail, q3.materiselesai, q3.jumlahmateri
        FROM memberpurchase, kelas, member, (
          SELECT memberpurchase.kelasID, q2.materiselesai, q2.jumlahmateri
          FROM memberpurchase
          LEFT JOIN (
            SELECT materiselesaibaca.kelasID, COUNT(materiselesaibaca.kelasID) AS materiselesai, q1.jumlahmateri
            FROM (
              SELECT COUNT(materi.materiID) AS jumlahmateri, topik.kelasID
              FROM materi, topik
              WHERE topik.topikID = materi.topikID
              GROUP BY topik.kelasID
            ) AS q1, materiselesaibaca
            WHERE
            q1.kelasID = materiselesaibaca.kelasID AND
            memberID = '${memberID}'
          ) AS q2
          ON memberpurchase.kelasID = q2.kelasID
        ) AS q3
        WHERE
        member.memberID = kelas.memberID AND
        kelas.kelasID = memberpurchase.kelasID AND
        q3.kelasID = memberpurchase.kelasID AND
        memberpurchase.memberID = '${memberID}';`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/mengikuti/:memberID', async function(req,res){
    try {
        let memberID = req.params.memberID
        const sqlQuery = `SELECT following.followedID, member.Name, member.profilephoto FROM member, following WHERE following.followedID = member.memberID AND following.memberID = '${memberID}';`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/diikuti/:memberID', async function(req,res){
    try {
        let memberID = req.params.memberID
        const sqlQuery = `SELECT following.memberID, member.Name, member.profilephoto FROM member, following WHERE following.memberID = member.memberID AND following.followedID = '${memberID}';`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.put('/setanalyst', async function (req,res){
  try {
    let data = req.body;
    const sqlQuery = `UPDATE member
    SET
    isAnalyst = "1",
    WHERE memberID = "${data.memberID}"`;
    const rows = await pool.query(sqlQuery);
    res.status(200).json(rows);
  } catch (error) {
    res.status(400).send(error.message)
  }
});

router.get('/pengikut/:followedID', async function(req,res){
  try {
    let followedID = req.params.followedID;
    const sqlQuery = `SELECT Count(*) AS pengikut from following WHERE followedID = '${followedID}';`;
    const rows = await pool.query(sqlQuery);
    res.status(200).json(rows);
  } catch (error) {
    res.status(400).send(error.message)
  }});

router.get('/mengikuti/:memberID/:followedID', async function(req,res){
  try {
    let memberID = req.params.memberID;
    let followedID = req.params.followedID;
    const sqlQuery = `SELECT followingID from following WHERE memberID = '${memberID}' AND followedID = '${followedID}'`;
    const rows = await pool.query(sqlQuery);
    res.status(200).json(rows);
  } catch (error) {
    res.status(400).send(error.message)
  }});

router.post('/mengikuti', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `INSERT INTO following VALUES ('','${data.memberID}','${data.followedID}')`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
      res.status(400).send(error.message)
    }
  });

router.delete('/mengikuti', async function (req,res){
      try {
        let data = req.body;
        const sqlQuery = `DELETE from following WHERE memberID = ${data.memberID} AND followedID = ${data.followedID}`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
      } catch (error) {
        res.status(400).send(error.message)
      }
    });

// Materi

router.post('/submitkelas', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `INSERT INTO kelas VALUES ('','${data.memberID}','${data.judul}','${data.thumbnail}','${data.jenisKelas}', '${data.harga}', CURRENT_DATE())`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.put('/ubahkelas', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `UPDATE kelas
      SET
      judul = "${data.judul}",
      thumbnail = IF(thumbnail = "${data.thumbnail}", thumbnail, "${data.thumbnail}"),
      jenisKelas = "${data.jenisKelas}",
      harga = "${data.harga}",
      createdAt = CURRENT_DATE()
      WHERE kelasID = "${data.kelasID}"`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.delete('/hapuskelas', async function (req,res){
    try {
      const sqlQuery = `DELETE FROM kelas WHERE kelasID='${req.body.kelasID}'`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/submitmateri', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `INSERT INTO materi VALUES ('','${data.topikID}','${data.judul}','${data.deskripsi}','${data.linkvideo}')`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.put('/ubahmateri', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `
        UPDATE materi
        SET
        judul = IF('${data.judul}' = '', judul, '${data.judul}'),
        deskripsi = IF('${data.deskripsi}' = '', deskripsi, '${data.deskripsi}'),
        linkvideo = IF('${data.linkvideo}' = '', linkvideo, '${data.linkvideo}')
        WHERE materiID = ${data.materiID}`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.delete('/hapusmateri', async function (req,res){
    try {
      const sqlQuery = `DELETE FROM materi WHERE materiID='${req.body.materiID}'`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
})

router.post('/simpantopik', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `INSERT INTO topik VALUES ('','${data.kelasID}','${data.namaTopik}')`;
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

router.post('/setselesai', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `INSERT INTO materiselesaibaca VALUES ('','${data.memberID}','${data.kelasID}','${data.materiID}')`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/carianalis', async function(req,res){
    try {
        const sqlQuery = `SELECT memberID, Name, refresh_token, isAnalyst, CONCAT('${req.protocol}', "://", '${req.get("host")}', "/uploads/profil/", profilephoto) AS profilephoto, CONCAT('${req.protocol}', "://", '${req.get("host")}', "/uploads/cover/", coverphoto) AS coverphoto FROM member`;
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

router.get('/kelas/:memberID', async function(req,res){
    try {
        let memberID = req.params.memberID
        const sqlQuery = `SELECT kelasID, memberID, judul, CONCAT('${req.protocol}', "://", '${req.get("host")}', "/uploads/", thumbnail) AS thumbnail, jenisKelas, harga, createdAt FROM kelas WHERE memberID = ${memberID}`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/kelas/id/:kelasID', async function(req,res){
    try {
        let kelasID = req.params.kelasID
        const sqlQuery = `SELECT * FROM kelas WHERE kelasID = ${kelasID}`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/materi/id/:materiID', async function(req,res){
    try {
        let materiID = req.params.materiID
        const sqlQuery = `SELECT materi.materiID, topik.kelasID, materi.topikID, materi.judul, materi.deskripsi, materi.linkvideo FROM materi, topik WHERE materi.topikID = topik.topikID AND materi.materiID = ${materiID}`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/materiselesaibaca/:memberID/:kelasID', async function(req,res){
    try {
        let memberID = req.params.memberID
        let kelasID = req.params.kelasID
        const sqlQuery = `SELECT * FROM materiselesaibaca WHERE kelasID = ${kelasID} AND memberID = ${memberID}`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/tampilkanTopik/:kelasID', async function(req,res){
    try {
        let kelasID = req.params.kelasID
        const sqlQuery = `SELECT materiID, judul, topik.topikID, namaTopik, topik.kelasID FROM materi, topik WHERE topik.kelasID = '${kelasID}' AND topik.topikID = materi.topikID`;
        const rows = await pool.query(sqlQuery);
        const objIds = rows.reduce((a, { namaTopik, topikID, materiID, judul }) => {
          a[topikID] = a[topikID] || {topikID, materiID: [], judul:[]}
          return {...a, ...{[topikID]: {namaTopik, topikID,
            materiID: a[topikID].materiID.concat(materiID),
            judul:a[topikID].judul.concat(judul)}}}
        }, {})

        const result = Object.values(objIds)
        res.status(200).json(result);
        let newObject = Object.keys(result).reduce((acc, val) => {
          acc[val] = result[val].namaTopik;
          return acc;
}, {});
        console.log(newObject);

    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/tampilkanTopikKelas/:kelasID', async function(req,res){
    try {
        let kelasID = req.params.kelasID
        const sqlQuery = `SELECT * FROM topik WHERE kelasID = '${kelasID}'`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);

    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/tampilkanMateri/:topikID', async function(req,res){
    try {
        let topikID = req.params.topikID
        const sqlQuery = `SELECT materiID, judul, topik.topikID, namaTopik, topik.topikID FROM materi, topik WHERE topik.topikID = '${topikID}' AND topik.topikID = materi.topikID; `;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }});

router.get('/kelaslulus/:memberID', async function(req,res){
    try {
        let memberID = req.params.memberID
        const sqlQuery = `SELECT materiselesaibaca.kelasID, COUNT(materiselesaibaca.kelasID) AS materiselesai, q1.jumlahmateri FROM (SELECT COUNT(materi.materiID) AS jumlahmateri, topik.kelasID FROM materi, topik WHERE topik.topikID = materi.topikID GROUP BY topik.kelasID) AS q1, materiselesaibaca WHERE q1.kelasID = materiselesaibaca.kelasID AND memberID = ${memberID};`;
        const rows = await pool.query(sqlQuery);
        res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }});

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

// Analisis

router.get('/analisa/:memberID', async function(req,res){
  try {
    let memberID = req.params.memberID
    const sqlQuery = `SELECT * FROM analysis WHERE memberID = "${memberID}"`;
    const rows = await pool.query(sqlQuery);
    res.status(200).json(rows);
  } catch (error) {
    res.status(400).send(error.message)
  }


});

router.post('/submitanalisis', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `INSERT INTO analysis VALUES ('','${data.memberID}',CURRENT_DATE(),'${data.deskripsi}','${data.kodeSaham}','${data.targetHarga}','${data.hargaAwal}','Hold','0','0')`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.post('/voting', async function (req,res){
    try {
      let data = req.body;
      const sqlQuery = `UPDATE analysis SET ${data.voting} = ${data.voting} + 1 WHERE analysisID = ${data.analysisID};`;
      const rows = await pool.query(sqlQuery);
      res.status(200).json(rows);
    } catch (error) {
        res.status(400).send(error.message)
    }
});

// Pembayaran

router.post('/cetakinvoice', async function (req,res){
  const { Invoice } = x;
  const i = new Invoice({});
  let data = req.body;

  (async function() {
    try {
      let invoice = await i.createInvoice({
        externalID: Date.now().toString(),
        payerEmail: data.email,
        description: `Dukungan untuk kelas ${data.judul}`,
        amount: data.harga,
        customer: {
          given_names: data.name,
          email: data.email,
          mobile_number:data.Phone,
        },
        customerNotificationPreference: {
          invoice_created: ['email'],
        },
        successRedirectURL: data.currentpath,
      });
      pool.query(`INSERT INTO memberpurchase (memberID, kelasID, invoiceID) values ('${data.memberID}', '${data.kelasID}', '${invoice.id}') ON DUPLICATE KEY UPDATE invoiceID = '${invoice.id}'`);
      res.status(200).json(invoice)
    } catch (e) {
      res.status(400).send(e.message)
    }
  })();

});

router.post('/cekinvoice', async function (req,res){
  const { Invoice } = x;
  const i = new Invoice({});



  (async function() {
    try {
      let invoiceID = await pool.query(`SELECT invoiceID FROM memberpurchase WHERE memberID = '${req.body.memberID}' AND kelasID = '${req.body.kelasID}'`);
      let invoice = await i.getInvoice({ invoiceID: invoiceID[0].invoiceID });
      res.status(200).json(invoice)
    } catch (e) {
      res.status(400).send(e.message)
    }
  })();

});

router.post('/ceksaldo', async function (req,res){
  try {
    let data = req.body;
    const sqlQuery = `SELECT * from balancedetail WHERE memberID = '${data.memberID}' `;
    const rows = await pool.query(sqlQuery);
    res.status(200).json(rows);
  } catch (error) {
      res.status(400).send(error.message)
  }

});

router.post('/submitpenarikan', async function (req,res){
  const { Disbursement } = x;
  const d = new Disbursement({});
  let data = req.body;

    try {
      let disb = await d.create({
      externalID: `${data.bankCode} - single disbursement`,
      bankCode: `${data.bankCode}`,
      accountHolderName: `${data.namaPemilik}`,
      accountNumber: `${data.nomorRekening}`,
      description: `Penarikan dana`,
      amount: `${data.jumlahTarik}`,
    });
      res.status(200).json(disb)
    } catch (error) {
        res.status(400).send(error.message)
    }
});

router.get('/available_banks', async function(req,res){
        const { Disbursement } = x;
        const disbursementSpecificOptions = {};
        const d = new Disbursement(disbursementSpecificOptions);
        (async function() {
          try {
            let banks = await d.getBanks();
            res.status(200).json(banks);
          } catch (e) {
            res.status(400).send(e.message)
          }
        })();


});

router.get('/transaksi/:memberID', async function(req,res){
  try {
    let memberID = req.params.memberID
    const sqlQuery = `SELECT * FROM memberpurchase WHERE memberID = "${memberID}"`;
    const rows = await pool.query(sqlQuery);
    const { Invoice } = x;
    const i = new Invoice({});

    for (var j = 0; j < rows.length; j++) {
      let invoice = await i.getInvoice({ invoiceID: rows[j].invoiceID });
      rows[j]["dataInvoice"] = invoice;
    }
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
