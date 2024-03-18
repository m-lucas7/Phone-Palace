import React, { useState, useEffect } from "react";
import axios from 'axios';

const Article = () => {
  const [printsData, setPrintsData] = useState(null);

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
    addItem(print);
  };

  return (
    <div className="centered-container">
      {printsData ? (
        <div className="centered-content">
          <h1>Articles</h1>
          {printsData.map((print, index) => (
            <div key={index}>
              <p>Titre: {print.name}</p>
              <p>Description: {print.descr}</p>
              <a href={`detail/${print.id}`} target="_blank">
                <img src={print.image} alt="" />
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
    </div>
  );
};

export default Article;
