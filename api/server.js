const express = require('express');
const port = 3000;

const app = express();

// Midleware qui permet de traiter les données POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require ("./routes/post.routes"));

// Lancer le serveur
app.listen(port, () => {
  console.log(`Le serveur est démarré sur le port : ` + port);
});