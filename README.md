# Phone Palace

Membres du groupe :

- MONIEZ Lucas
- MAES Baptiste
- SAINDRENAN Jean
- DIEU Timothé

# Tâches à réaliser

Création d'une API pour afficher les différents produits sur notre futur site web.
L'utilisateur peut consulter une liste de produits.

- L'utilisateur peut ajouter un produit au panier.
- L'utilisateur peut payer son panier en indiquant son adresse de livraison.
- L'administrateur doit pouvoir consulter les dernières commandes.
- L'objectif principal est de garantir un code maintenable pour cette nouvelle application.

Chaque PR doit également déclencher l'exécution de tests de non-régression.

# Pour utiliser le projet

- cd site/
- npm install
- npm install axios
- npm install express

# Création de l'API

Pour créer notre API, nous avons dû installer toutes les dépendances afin de pouvoir faire fonctionner l'API.
Nous commençons par faire un "npm init -y".
Puis nous installons toutes les dépendances grâce à la commande "npm i express dotenv mongoose nodemon".

- Express : Crée des serveurs facilement.
- DotEnv : Variables d'environnement.
- Mongoose : Pour MongoDB et sert à faire des liens avec la base de données.
- Nodemon : Actualisation en live du serveur.

Nous allons créer le fichier server.js afin de pouvoir démarrer notre API.
Dans ce fichier, nous commençons par importer la librairie "Express":

- const express = require('express');

Ensuite, nous allons faire un "const app = express();" qui signifie que nous allons chercher les fonctions d'Express lorsque nous allons utiliser notre App.

Ensuite, nous allons faire en sorte de définir un port pour notre serveur, ici nous mettrons le port "3000".

Je vais utiliser l'application Postman (https://www.postman.com/) afin de vérifier si tous mes envois vers le serveur sont corrects et fonctionnels.

## Création des routes

Nous allons mettre en place les routes de l'API.

Pour effectuer ceci, nous allons le faire grâce à un Router qui nous permet de communiquer entre le serveur et les routes.
Nous avons donc créé un fichier "post.routes.js" qui nous permet d'envoyer des données au Router.
Nous avons ensuite récupéré les données du Router dans le serveur grâce à "app.use ("post", require("./routes/post.routes"));"

Nous avons ajouté la possibilité d'être mis au courant quand un nouveau téléphone est supprimé ou ajouté.
Tout cela en récupérant un ID pour être précis dans nos utilisations.

# Instalation de la Base de Donnée

Pour utiliser une base de données dans notre API, nous allons utiliser MySQL. Nous allons utiliser la commande suivante,

- npm install mysql;

Il faut veiller à avoir une base de données interne sur notre machine. Ici, nous allons utiliser XAMPP (https://sourceforge.net/projects/xampp/).

Une fois la base de données créée, nous allons récupérer les informations de la base de données dans le fichier server.js.
Nous remplissons notre base de données avec les informations de 5 téléphones. Nous créons également une table admin, où se trouveront toutes les informations de connexion de nos administrateurs sur notre site. Une fois ceci effectué, notre base de données est prête, et nous pouvons la relier à notre site Phone Palace.

# Démarrer l'API

En premier lieu, il faut se rendre dans le dossier de l'API :

- cd api/
  Ensuite, nous allons donc la démarrer grâce à la commande :
- npm start
