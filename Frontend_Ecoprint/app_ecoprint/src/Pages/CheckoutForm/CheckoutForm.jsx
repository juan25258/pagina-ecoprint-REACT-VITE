import React, { useState } from 'react';

const CheckoutForm = () => {
  const [cardData, setCardData] = useState({
    card_number: '',
    expiration_month: '',
    expiration_year: '',
    security_code: '',
    cardholderName: '',
  });

  const [token, setToken] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setCardData({ ...cardData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // SDK de MercadoPago
    const mp = new window.MercadoPago('TEST-bf50922d-ba8e-4d84-a0b4-df19a71fa65b'); // Reemplaza por tu PUBLIC_KEY

    const cardFields = {
      cardNumber: cardData.card_number,
      cardExpirationMonth: cardData.expiration_month,
      cardExpirationYear: cardData.expiration_year,
      securityCode: cardData.security_code,
      cardholderName: cardData.cardholderName,
    };

    mp.createCardToken(cardFields).then((response) => {
      if (response.id) {
        console.log('Token generado:', response.id);
        setToken(response.id);
      } else {
        console.error('Error al generar el token:', response);
      }
    }).catch((error) => {
      console.error('Error:', error);
    });
  };

  return (
    <div>
      <h2>Formulario de Pago</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Número de Tarjeta</label>
          <input
            type="text"
            name="card_number"
            value={cardData.card_number}
            onChange={handleInputChange}
            placeholder="5031755734530604"
            required
          />
        </div>
        <div>
          <label>Mes de Expiración</label>
          <input
            type="text"
            name="expiration_month"
            value={cardData.expiration_month}
            onChange={handleInputChange}
            placeholder="11"
            required
          />
        </div>
        <div>
          <label>Año de Expiración</label>
          <input
            type="text"
            name="expiration_year"
            value={cardData.expiration_year}
            onChange={handleInputChange}
            placeholder="2025"
            required
          />
        </div>
        <div>
          <label>Código de Seguridad</label>
          <input
            type="text"
            name="security_code"
            value={cardData.security_code}
            onChange={handleInputChange}
            placeholder="123"
            required
          />
        </div>
        <div>
          <label>Nombre del Titular</label>
          <input
            type="text"
            name="cardholderName"
            value={cardData.cardholderName}
            onChange={handleInputChange}
            placeholder="APRO"
            required
          />
        </div>
        <button type="submit">Generar Token</button>
      </form>

      {token && <p>Token generado: {token}</p>}
    </div>
  );
};

export default CheckoutForm;
