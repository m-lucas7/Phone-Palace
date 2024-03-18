const express = require("express");
const router = express.Router();
const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "phonepalace",
});

connection.connect();

router.post("/login", (req, res) => {
  const { mail, password } = req.body;
  const sql = `SELECT * FROM admin WHERE mail = ? AND password = ?`;
  connection.query(sql, [mail, password], (err, results) => {
    if (err) {
      console.error("Erreur lors de la vérification des identifiants : ", err);
      res.status(500).json({ message: "Erreur serveur" });
      return;
    }
    if (results.length > 0) {
      res.status(200).json({ message: "Connexion réussie" });
    } else {
      res.status(401).json({ message: "Identifiants invalides" });
    }
  });
});

router.get("/", (req, res) => {
  console.log("GET /post");
  connection.query(
    "SELECT * FROM telephones",
    function (error, results, fields) {
      if (error) throw error;
      console.log("The solution is: ", results);
      res.json(results);
    }
  );
});

router.post("/", (req, res) => {
  console.log(req.body);
  res.json({ message: req.body.message });
});

router.put("/:id", (req, res) => {
  res.json({ messageId: req.params.id });
});

router.delete("/:id", (req, res) => {
  res.json({ message: "Suppression de l'id : " + req.params.id });
});

router.patch("/phone-post/:id", (req, res) => {
  res.json({ message: "Ajout du téléphone à l'id : " + req.params.id });
});

router.patch("/phone-delete/:id", (req, res) => {
  res.json({ message: "Suppression du téléphone à l'id : " + req.params.id });
});

module.exports = router;
