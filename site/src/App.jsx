// index.js

import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Ajoutez Routes et Route
import Navbar from "../components/navBar";
import Home from "../components/home";
import Panier from "../components/panier";
import Article from "../components/article";
import Admin from "../components/admin";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="article" element={<Article />} />
          <Route path="panier" element={<Panier />} />
          <Route path="admin" element={<Admin />} />
          
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
