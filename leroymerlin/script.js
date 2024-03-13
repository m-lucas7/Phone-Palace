const titre = document.createElement('h1');
titre.textContent = "Bienvenue sur le site Leroy Merlin";

const description = document.createElement('p');
description.textContent = "Découvrez nos produits et services pour la maison";

const image = document.createElement('img');
image.src = "chemin/vers/image.jpg";
image.alt = "Image Leroy Merlin";

const body = document.querySelector('body');
body.appendChild(titre);
body.appendChild(description);
body.appendChild(image);