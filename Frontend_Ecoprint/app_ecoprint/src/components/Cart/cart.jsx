import React from 'react';
import { useCart } from "../../cartContext.jsx";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  return (
    <div>
      <h2>Carrito de Compras</h2>
      {cart.length === 0 ? (
        <p>El carrito está vacío</p>
      ) : (
        <>
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              {item.title} - {item.price}
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <button onClick={clearCart}>Vaciar Carrito</button>
        </>
      )}
      <Link to="/checkout">Proceder al Pago</Link>
    </div>
  );
};

export default Cart;