const express = require("express");
var cors = require("cors");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/post", require("./routes/post.routes"));
app.use(express.static("public"));

app.use(cors());

app.get("/", (req, res) => {
  res.status(200).send("OK");
});

app.listen(3000, () => {
  console.log(`Le serveur est démarré sur le port : 3000`);
});

module.exports = app;
