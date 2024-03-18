<<<<<<< Updated upstream
import React from "react";
=======
import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useCart } from 'react-use-cart'; // Importez useCart depuis react-use-cart
import { CartProvider } from 'react-use-cart';

const Article = () => {
  const [printsData, setPrintsData] = useState(null);
  const { addItem } = useCart(); // Obtenez la fonction addItem de useCart
console.log(addItem);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://localhost:3000/post');
        setPrintsData(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des données', error);
      }
    };

    fetchData();
  }, []);

  const handleAddToCart = (print) => {
    console.log(addItem);
    addItem(print);
  };
>>>>>>> Stashed changes

function Article() {
  return (
<<<<<<< Updated upstream
    <div>
      <h2>Home</h2>
      <p>Welcome to our article</p>
=======
    <div className="centered-container">
      {printsData ? (
        <div className="centered-content">
          <h1>Articles</h1>
          {printsData.map((print, index) => (
            <div key={index}>
              <p>Titre: {print.name}</p>
              <p>Description: {print.descr}</p>
              <a href={`detail/${print.id}`} target="_blank">
                <img src={print.image}  />
              </a>
              <p>Prix: {print.price} €</p>
              <button onClick={() => handleAddToCart(print)}>Ajouter au panier</button>
              <a href={`detail/${print.id}`} target="_blank">
                <button>Voir détail</button>
              </a>
            </div>
          ))}
        </div>
      ) : (
        <p>Chargement des données...</p>
      )}
>>>>>>> Stashed changes
    </div>
  );
}

export default Article;
