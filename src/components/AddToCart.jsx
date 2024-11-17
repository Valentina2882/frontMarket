import React, { useState } from 'react';
import api from '../services/api';

const AddToCart = () => {
  const [cartId, setCartId] = useState('');
  const [orderId, setOrderId] = useState('');
  const [message, setMessage] = useState('');

  const addOrderToCart = async () => {
    try {
      const response = await api.post('/', { cartId, orderId });
      setMessage(response.data.message);
    } catch (error) {
      console.error('Error adding order to cart:', error.message);
      setMessage('Error al agregar la orden al carrito');
    }
  };

  return (
    <div>
      <h2>Agregar Orden al Carrito</h2>
      <input
        type="text"
        placeholder="ID del carrito"
        value={cartId}
        onChange={(e) => setCartId(e.target.value)}
      />
      <input
        type="text"
        placeholder="ID de la orden"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={addOrderToCart}>Agregar</button>
      {message && <p>{message}</p>}
    </div>
  );
};

export default AddToCart;
