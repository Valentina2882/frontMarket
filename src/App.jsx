import React from 'react';
import OrdersList from './components/OrdersList';
import OrderDetails from './components/OrderDetails';
import AddToCart from './components/AddToCart';

const App = () => {
  return (
    <div>
      <h1>Carrito de Compras</h1>
      <OrdersList />
      <OrderDetails />
      <AddToCart />
    </div>
  );
};

export default App;
