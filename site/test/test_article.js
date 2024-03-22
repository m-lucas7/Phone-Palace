import { render, screen, fireEvent } from '@testing-library/react';
import axios from 'axios';
import Article from '../components/article';

jest.mock('axios');

describe('Article', () => {
  test('renders loading message while fetching data', () => {
    render(<Article />);
    
    expect(screen.getByText('Chargement des données...')).toBeInTheDocument();
  });

  test('renders articles after data is fetched', async () => {
    const mockData = [
      { id: 1, name: 'Article 1', descr: 'Description 1', image: 'image1.jpg', price: 10 },
      { id: 2, name: 'Article 2', descr: 'Description 2', image: 'image2.jpg', price: 20 },
    ];
    axios.get.mockResolvedValueOnce({ data: mockData });
    
    render(<Article />);
    
    expect(await screen.findByText('Articles')).toBeInTheDocument();
    expect(screen.getByText('Titre: Article 1')).toBeInTheDocument();
    expect(screen.getByText('Description: Description 1')).toBeInTheDocument();
    expect(screen.getByAltText('')).toHaveAttribute('src', 'image1.jpg');
    expect(screen.getByText('Prix: 10 €')).toBeInTheDocument();
    expect(screen.getByText('Titre: Article 2')).toBeInTheDocument();
    expect(screen.getByText('Description: Description 2')).toBeInTheDocument();
    expect(screen.getByAltText('')).toHaveAttribute('src', 'image2.jpg');
    expect(screen.getByText('Prix: 20 €')).toBeInTheDocument();
  });

  test('calls addItem when "Ajouter au panier" button is clicked', async () => {
    const mockData = [
      { id: 1, name: 'Article 1', descr: 'Description 1', image: 'image1.jpg', price: 10 },
    ];
    axios.get.mockResolvedValueOnce({ data: mockData });
    const addItemMock = jest.fn();
    
    render(<Article addItem={addItemMock} />);
    
    fireEvent.click(screen.getByText('Ajouter au panier'));
    
    expect(addItemMock).toHaveBeenCalledWith(mockData[0]);
  });

  test('navigates to detail page when "Voir détail" button is clicked', async () => {
    const mockData = [
      { id: 1, name: 'Article 1', descr: 'Description 1', image: 'image1.jpg', price: 10 },
    ];
    axios.get.mockResolvedValueOnce({ data: mockData });
    window.open = jest.fn();
    
    render(<Article />);
    
    fireEvent.click(screen.getByText('Voir détail'));
    
    expect(window.open).toHaveBeenCalledWith('detail/1', '_blank');
  });
});