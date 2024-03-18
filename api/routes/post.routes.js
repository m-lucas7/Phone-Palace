const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    console.log("GET /post");
    var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'phonepalace'
});
 
connection.connect();
 
connection.query('SELECT * FROM telephones', function (error, results, fields) {
  if (error) throw error;
  console.log('The solution is: ', results);
  res.json(results);
});
 
connection.end();

}),
  router.post("/", (req, res) => {
    console.log(req.body);
    res.json({ message: req.body.message });
  }),
  router.put("/:id", (req, res) => {
    res.json({ messageId: req.params.id });
  }),
  router.delete("/:id", (req, res) => {
    res.json({ message: "Suppression de l'id : " + req.params.id });
  });

router.patch("/phone-post/:id", (req, res) => {
  res.json({ message: "Ajoout du téléphone à l'id : " + req.params.id });
});

router.patch("/phone-delete/:id", (req, res) => {
  res.json({ message: "Suppression du téléphone à l'id : " + req.params.id });
});

module.exports = router;
