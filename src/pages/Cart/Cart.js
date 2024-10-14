import React, { useContext, useEffect, useState } from 'react';
import { UserLoginContext } from '../../contexts/UserLoginContext';

function Cart() {
  const { curr, token } = useContext(UserLoginContext);
  const [cart, setCart] = useState([]);

  // Mock cart data for now if you don't have a backend ready
  useEffect(() => {
    setCart([
      { id: 1, title: 'Sample Product 1', price: 100, brand: 'Brand A' },
      { id: 2, title: 'Sample Product 2', price: 200, brand: 'Brand B' },
    ]);
  }, []);

  return (
    <div>
      <h1>Your Cart</h1>
      <ul>
        {cart.map((item) => (
          <li key={item.id}>
            {item.title} - ${item.price} - {item.brand}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
