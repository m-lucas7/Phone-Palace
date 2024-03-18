import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Cart from './Cart';

describe('Cart component', () => {
  it('should display "le panier est vide" when the cart is empty', () => {
    const { getByText } = render(<Cart />);

    expect(getByText('le panier est vide')).toBeInTheDocument();
  });

  it('should display cart items when the cart is not empty', () => {
    const items = [
      { id: 1, title: 'Item 1', quantity: 2 },
      { id: 2, title: 'Item 2', quantity: 1 }
    ];

    const { getByText } = render(<Cart />, {
      initialState: { useCart: { isEmpty: false, totalUniqueItems: 2, items: items } }
    });

    expect(getByText('Item 1')).toBeInTheDocument();
    expect(getByText('Item 2')).toBeInTheDocument();
  });

  it('should call updateItemQuantity when clicking the "+" button', () => {
    const updateItemQuantityMock = jest.fn();
    const items = [{ id: 1, title: 'Item 1', quantity: 2 }];

    const { getByText } = render(<Cart />, {
      initialState: { useCart: { isEmpty: false, totalUniqueItems: 1, items: items, updateItemQuantity: updateItemQuantityMock } }
    });

    fireEvent.click(getByText('+'));
    expect(updateItemQuantityMock).toHaveBeenCalledWith(1, 3);
  });
});
