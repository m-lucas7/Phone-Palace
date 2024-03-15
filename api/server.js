const express = require('express');
const port = 3000;

const app = express();

app.get('/post', (req, res) => {
  res.json({ message: 'Voici les données !' });
}),

app.listen(port, () => {
  console.log(`Le serveur est démarré sur le port : ` + port);
});