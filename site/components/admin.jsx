import React, { useState } from "react";
import axios from "axios"; // Assurez-vous d'avoir installé Axios dans votre projet
import { Outlet, Link, useNavigate } from "react-router-dom";
function Admin({ onLogin }) {
  const [mail, setmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Envoyer les données de connexion à votre API backend
      const response = await axios.post("http://localhost:3000/post/login", {
        mail,
        password,
      });
      // Gérer la réponse de l'API backend
      console.log("Réponse de l'API:", response, response.data);
      // Appeler la fonction de gestion de connexion parente si la connexion est réussie
      if (response.status === 200) {
        navigate("/");
        //onLogin(mail, password);
      }
    } catch (error) {
      console.error("Erreur lors de la connexion:", error);
    }
  };

  return (
    <div>
      <h2>Connexion</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="mail">Adresse mail:</label>
          <input
            type="mail"
            id="mail"
            value={mail}
            onChange={(e) => setmail(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="password">Mot de passe:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit">se connecter </button>
      </form>
    </div>
  );
}
export default Admin;
