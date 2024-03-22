import { render, screen, waitFor } from '@testing-library/react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Detail from '../components/detail';

jest.mock('axios');

describe('Detail', () => {
  beforeEach(() => {
    useParams.mockReturnValue({ id: '1' });
  });

  test('renders loading message while fetching print details', async () => {
    render(<Detail />);
    
    expect(screen.getByText('Chargement des détails du produit...')).toBeInTheDocument();
  });

  test('renders print details after successful fetch', async () => {
    const mockPrint = {
      name: 'Print 1',
      descr: 'Description of Print 1',
      price: 10,
    };
    
    axios.get.mockResolvedValueOnce({ data: mockPrint });
    
    render(<Detail />);
    
    await waitFor(() => {
      expect(screen.getByText('Print 1')).toBeInTheDocument();
      expect(screen.getByText('Description: Description of Print 1')).toBeInTheDocument();
      expect(screen.getByText('Prix: 10 €')).toBeInTheDocument();
    });
  });

  test('handles error during fetch', async () => {
    const mockError = new Error('Failed to fetch print details');
    
    axios.get.mockRejectedValueOnce(mockError);
    
    render(<Detail />);
    
    await waitFor(() => {
      expect(console.error).toHaveBeenCalledWith('Erreur lors de la récupération des détails du produit', mockError);
    });
  });
});