import React, { useState, useEffect } from 'react';
import api from '../services/api';

const OrdersList = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const response = await api.get('/');
        setOrders(response.data.orders);
      } catch (error) {
        console.error('Error fetching orders:', error.message);
      }
    };

    fetchOrders();
  }, []);

  return (
    <div>
      <h2>Lista de Órdenes</h2>
      <ul>
        {orders.map((order) => (
          <li key={order.id}>
            ID: {order.id} - Carrito Asociado: {order.shoppingCartId || 'N/A'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default OrdersList;
