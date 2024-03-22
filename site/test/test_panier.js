import { render, screen, fireEvent } from '@testing-library/react';
import { useCart } from '../components/panier'; // Replace with the actual path to useCart

jest.mock('path/to/useCart', () => ({
  useCart: jest.fn(),
}));

describe('Cart', () => {
  beforeEach(() => {
    useCart.mockReturnValue({
      isEmpty: false,
      totalUniqueItems: 2,
      items: [
        { id: 1, quantity: 2, title: 'Item 1' },
        { id: 2, quantity: 3, title: 'Item 2' },
      ],
      updateItemQuantity: jest.fn(),
      removeItem: jest.fn(),
      emptyCart: jest.fn(),
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('renders the cart with items', () => {
    render(<Cart />);
    
    expect(screen.getByText('Votre panier (2)')).toBeInTheDocument();
    expect(screen.getByText('2 x Item 1')).toBeInTheDocument();
    expect(screen.getByText('3 x Item 2')).toBeInTheDocument();
  });

  test('calls emptyCart when "Vider le panier" button is clicked', () => {
    render(<Cart />);
    
    fireEvent.click(screen.getByText('Vider le panier'));
    
    expect(useCart().emptyCart).toHaveBeenCalled();
  });

  test('calls updateItemQuantity when "-" button is clicked', () => {
    render(<Cart />);
    
    fireEvent.click(screen.getAllByText('-')[0]);
    
    expect(useCart().updateItemQuantity).toHaveBeenCalledWith(1, 1);
  });

  test('calls updateItemQuantity when "+" button is clicked', () => {
    render(<Cart />);
    
    fireEvent.click(screen.getAllByText('+')[0]);
    
    expect(useCart().updateItemQuantity).toHaveBeenCalledWith(1, 3);
  });

  test('calls removeItem when "×" button is clicked', () => {
    render(<Cart />);
    
    fireEvent.click(screen.getAllByText('×')[0]);
    
    expect(useCart().removeItem).toHaveBeenCalledWith(1);
  });
});