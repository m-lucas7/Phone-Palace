import { CartProvider, useCart } from "react-use-cart";

function Page() {
  const { addItem } = useCart();

  const products = [
  ];

  return (
    <div>
      {products.map((p) => (
        <div key={p.id}>
        </div>
      ))}
    </div>
  );
}

function Cart() {
  const {
    isEmpty,
    totalUniqueItems,
    items,
    updateItemQuantity,
    removeItem,
    emptyCart
  } = useCart();

  if (isEmpty) return <p>le panier est vide</p>;

  return (
    <>
      <h1>Votre panier ({totalUniqueItems})</h1>

      <button onClick={() => emptyCart()}>Vider le panier</button>

      <ul>
        {items.map((item) => (
          console.log(item),
          <li key={item.id}>
            {item.quantity} x {item.title} &mdash;
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity - 1)}
            >
              -
            </button>
            <button
              onClick={() => updateItemQuantity(item.id, item.quantity + 1)}
            >
              +
            </button>
            <button onClick={() => removeItem(item.id)}>&times;</button>
          </li>
        ))}
      </ul>
    </>
  );
}

function Panier() {
  return (
    <CartProvider>
      <Page />
      <Cart />
    </CartProvider>
  );
}

export default Panier;