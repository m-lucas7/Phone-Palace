const express = require('express');
var cors = require('cors')

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));
app.use(express.static('public'))

app.use(cors())

app.post('/login', (req, res) => {
  const { mail, password } = req.body;
  const sql = `SELECT * FROM admin WHERE mail = ? AND password = ?`;
  connection.query(sql, [mail, password], (err, results) => {
    if (err) {
      console.error('Erreur lors de la vérification des identifiants : ', err);
      res.status(500).json({ message: 'Erreur serveur' });
      return;
    }
    if (results.length > 0) {
      res.status(200).json({ message: 'Connexion réussie' });
    } else {
      res.status(401).json({ message: 'Identifiants invalides' });
    }
  });
});

app.get('/', (req, res) => {
  res.status(200).send('OK');
});

app.listen(3000, () => {
  console.log(`Le serveur est démarré sur le port : 3000`);
});

module.exports = app;