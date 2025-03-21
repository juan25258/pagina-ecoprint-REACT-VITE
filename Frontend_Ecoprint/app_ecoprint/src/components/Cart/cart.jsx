import React, { useState } from "react";
import { useCart } from "../../cartContext.jsx";
import { useNavigate } from "react-router-dom";
import "./cart.css";

const Cart = () => {
  const {
    cart,
    removeFromCart,
    clearCart,
    incrementQuantity,
    decrementQuantity,
  } = useCart();
  const navigate = useNavigate(); // Usar useNavigate para redirección
  const [loading, setLoading] = useState(false); // Estado para manejar la carga

  // Función para calcular el total del carrito
  const getTotal = () => {
    return cart.reduce(
      (accumulator, item) =>
        accumulator + parseFloat(item.price) * item.quantity,
      0
    );
  };

  const getTotalUSD = () => {
    return cart.reduce(
      (accumulator, item) =>
        accumulator + parseFloat(item.priceUSD) * item.quantity,
      0
    );
  };

  // Función para manejar el proceso de pago
  const handleProceedToPayment = async () => {
    if (cart.length === 0) return; // Si el carrito está vacío, no hacer nada

    setLoading(true); // Activar el estado de carga

    try {
      // Enviar los datos del carrito al backend
      const response = await fetch(
        "http://localhost:3001/api/mercadopago/create_preference",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cart.map((item) => ({
              title: item.title,
              unit_price: parseFloat(item.price),
              quantity: item.quantity,
            })),
            payer: {
              name: "Nombre del Cliente", // Puedes obtener esto de un formulario o contexto
              email: "cliente@example.com", // Puedes obtener esto de un formulario o contexto
            },
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Error al crear la preferencia de pago");
      }

      const data = await response.json();

      // Redirigir al usuario al Checkout Pro de MercadoPago
      window.location.href = `https://www.mercadopago.com.ar/checkout/v1/redirect?preference-id=${data.id}`;
    } catch (error) {
      console.error(error);
      alert("Error al procesar el pago");
    } finally {
      setLoading(false); // Desactivar el estado de carga
    }
  };

  // Función para manejar el pago con PayPal
  const handleProceedToPaymentPaypal = async () => {
    if (cart.length === 0) return;
    setLoading(true);
    try {
      const response = await fetch(
        "http://localhost:3001/api/paypal/create-order",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            items: cart.map((item) => ({
              title: item.title, // Cambiado de name a title
              unit_price: parseFloat(item.priceUSD), // Campo corregido
              quantity: item.quantity,
            })),
          }),
        }
      );

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || "Error al crear la orden de PayPal");
      }

      const data = await response.json();
      window.location.href = data.approvalUrl;
    } catch (error) {
      console.error(error);
      alert(error.message || "Error al procesar el pago con PayPal");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <span>
        <h2>Carrito de Compras</h2>
      </span>
      <div className="cart group">
        {cart.length === 0 ? (
          <p>El carrito está vacío</p>
        ) : (
          <>
            <div className="itemsCart">
              <ul>
                {cart.map((item, index) => (
                  <li
                    key={index}
                    className="border border-primary rounded m-1 p-1"
                  >
                    <div className="d-flex justify-content-between">
                      {item.title} - {"$ " + item.price}/
                      {"USD " + item.priceUSD} -{" "}
                      <div className="fw-bold">
                        {item.color} x {item.quantity}
                      </div>
                    </div>
                    <div className="button-menos-mas">
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => decrementQuantity(item.id)}
                      >
                        -
                      </button>{" "}
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => incrementQuantity(item.id)}
                      >
                        +
                      </button>
                      <button
                        type="button"
                        className="btn btn-secondary"
                        onClick={() => removeFromCart(item.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </li>
                ))}
                <button
                  type="button"
                  className="btn btn-dark"
                  onClick={clearCart}
                >
                  Vaciar Carrito
                </button>
              </ul>
              <div className="button-total border rounded bg-primary bg-opacity-75">
                <h4>Total: $ {getTotal().toFixed(2)}</h4>{" "}
                <h4>Total: USD {getTotalUSD().toFixed(2)}</h4>{" "}
                {/* Mostrar el total del carrito */}
              </div>
            </div>
          </>
        )}
        {/* Botón "Proceder al Pago" */}
        <div className="buttonsPay">
          <div className="buttonMercadopago">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleProceedToPayment}
              disabled={loading || cart.length === 0}
            >
              {loading ? "Procesando..." : "Proceder al Pago"}
            </button>
            <p>Para clientes de Argentina</p>
          </div>
          <div className="buttonPaypal">
            <button
              type="button"
              className="btn btn-success"
              onClick={handleProceedToPaymentPaypal}
              disabled={loading || cart.length === 0}
            >
              {loading ? "Procesando..." : "pagar con Paypal"}
            </button>
            <p>Si Ud. no es de Argentina, usar Paypal.</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
