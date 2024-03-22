import React from "react";
import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import axios from "axios"; // mockez axios si nécessaire
import Admin from "./admin"; // Assurez-vous que le chemin vers votre composant est correct

jest.mock("axios"); // Mock d'axios pour simuler les appels à l'API

describe("Admin Component", () => {
  test("submits form with valid credentials", async () => {
    // Mock d'une réponse réussie de l'API backend
    axios.post.mockResolvedValue({ status: 200 });

    render(<Admin />);

    // Remplir le formulaire avec des données valides
    fireEvent.change(screen.getByLabelText(/Adresse mail:/i), {
      target: { value: "azerty@azerty.azerty" },
    });
    fireEvent.change(screen.getByLabelText(/Mot de passe:/i), {
      target: { value: "azerty" },
    });

    fireEvent.click(screen.getByRole("button", { name: /se connecter/i }));

    // Attendez que l'appel à l'API soit résolu
    await waitFor(() => {
      expect(axios.post).toHaveBeenCalledWith(
        "http://localhost:3000/post/login",
        {
          mail: "azerty@azerty.azerty",
          password: "azerty",
        }
      );
    });

    // Vérifiez que la redirection a été effectuée avec succès
    expect(window.location.pathname).toEqual("/");
  });

  // Vous pouvez écrire d'autres tests pour tester différents scénarios, comme des erreurs de connexion, des champs vides, etc.
});
