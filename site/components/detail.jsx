import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const Detail = () => {
  const { id } = useParams();
  const [print, setPrint] = useState(null);

  useEffect(() => {
    const fetchPrintDetail = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/post`);
        setPrint(response.data);
      } catch (error) {
        console.error('Erreur lors de la récupération des détails du produit', error);
      }
    };

    fetchPrintDetail();
  }, [id]);

  if (!print) {
    return <p>Chargement des détails du produit..</p>;
  }

  return (
    <div>
      <h2>{print.name}</h2>
      <p>Description: {print.descr}</p>
      <img src={print.image} alt={print.name} />
      <p>Prix: {print.price} €</p>
    </div>
  );
};

export default Detail;
