import React, { useState } from 'react';
import api from '../services/api';

const OrderDetails = () => {
  const [orderId, setOrderId] = useState('');
  const [order, setOrder] = useState(null);

  const fetchOrderById = async () => {
    try {
      const response = await api.get(`/${orderId}`);
      setOrder(response.data.order);
    } catch (error) {
      console.error('Error fetching order:', error.message);
      setOrder(null);
    }
  };

  return (
    <div>
      <h2>Buscar Orden por ID</h2>
      <input
        type="text"
        placeholder="Ingrese el ID de la orden"
        value={orderId}
        onChange={(e) => setOrderId(e.target.value)}
      />
      <button onClick={fetchOrderById}>Buscar</button>
      {order && (
        <div>
          <h3>Detalles de la Orden</h3>
          <p>ID: {order.id}</p>
          <p>Carrito Asociado: {order.shoppingCartId || 'N/A'}</p>
        </div>
      )}
    </div>
  );
};

export default OrderDetails;
