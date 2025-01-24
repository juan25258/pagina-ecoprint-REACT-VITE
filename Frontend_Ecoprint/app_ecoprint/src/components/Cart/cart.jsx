import React from 'react';
import { useCart } from "../../cartContext.jsx";
//import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { cart, removeFromCart, clearCart, incrementQuantity, decrementQuantity } = useCart();
  const navigate = useNavigate(); // Usar useNavigate para redirección

// Función para calcular el total del carrito 
const getTotal = () => { 
  return cart.reduce((accumulator, item) => accumulator + (parseFloat(item.price) * item.quantity), 0); 
 }; 
 const handleProceedToPayment = () => {
  const totalAmount = getTotal();
  navigate('/checkout', { state: { total: totalAmount} });
 };

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
              {item.title} - {"$ " + item.price} x {item.quantity}
              <button onClick={() => decrementQuantity(item.id)}>-</button> <button onClick={() => incrementQuantity(item.id)}>+</button>
              <button onClick={() => removeFromCart(item.id)}>Eliminar</button>
            </li>
          ))}
        </ul>
        <h3>Total: ${getTotal().toFixed(2)}</h3> {/* Mostrar el total del carrito */}
        <button onClick={clearCart}>Vaciar Carrito</button>
        </>
      )}
      {/* <Link to="/checkout">Proceder al Pago</Link> */}
      <button onClick={handleProceedToPayment} >Proceder al Pago</button> {/* Actualizar para manejar la navegación */}
    </div>
  );
};

export default Cart;