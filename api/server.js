const express = require('express');

const app = express();

// Midleware qui permet de traiter les données POST
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));
app.use(express.static('public'))

// Lancer le serveur
app.listen(3000, () => {
  console.log(`Le serveur est démarré sur le port : 3000`);
});