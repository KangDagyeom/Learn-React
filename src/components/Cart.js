import React, { useState } from 'react';

function Cart() {
  const [items, setItems] = useState([]);
  const [total, setTotal] = useState(0);

  const addItem = (item) => {
    setItems([...items, item]);
    setTotal(total + item.price);
  };

  return (
    <div>
      <h2>Shopping Cart</h2>
      <button onClick={() => addItem({ name: 'Product 1', price: 10 })}>
        Add Product 1
      </button>
      <div>
        {items.map((item, index) => (
          <div key={index}>
            {item.name}: ${item.price}
          </div>
        ))}
      </div>
      <h3>Total: ${total}</h3>
    </div>
  );
}

export default Cart;