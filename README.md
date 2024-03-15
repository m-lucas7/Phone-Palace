# Phone Palace
Membres du groupe :

- MONIEZ Lucas
- MAES Baptiste
- SAINDRENAN Jean
- DIEU Timothé

# Tâches à réaliser :
Création d'une API pour afficher les différents produits sur notre futur site web.
L'utilisateur peut consulter une liste de produits.

- L'utilisateur peut ajouter un produit au panier.
- L'utilisateur peut payer son panier en indiquant son adresse de livraison.
- L'administrateur doit pouvoir consulter les dernières commandes.
- L'objectif principal est de garantir un code maintenable pour cette nouvelle application. 

Chaque PR doit également déclencher l'exécution de tests de non-régression.

# Pour utiliser le projet :

cd site/
npm install
npm install axios
npm install express

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

# Démarrer l'API
En premier lieu, il faut se rendre dans le dossier de l'API :
- cd api/
Ensuite, nous allons donc la démarrer grâce à la commande :
- npm start