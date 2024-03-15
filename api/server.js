const express = require('express');
const port = process.env.PORT || 3000;

const app = express();

app.get('/', (req, res) => {
  res.json({ message: 'Chargement des données...' });
})

app.listen(port, () => {
  console.log(`Le serveur est ouvert sur le port : ${port}`);
})