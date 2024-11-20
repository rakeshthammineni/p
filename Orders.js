import React, { useEffect, useState } from 'react';

function OrderList() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    
    fetch('http://localhost/getOrders.php')
      .then((response) => response.json())
      .then((data) => setOrders(data))
      .catch((error) => console.error('Error fetching orders:', error));
  }, []);

  return (
    <div className="order-list">
      <h2>Orders to Deliver</h2>
      {orders.length === 0 ? (
        <p>No orders to display.</p>
      ) : (
        orders.map((order) => (
          <div key={order.id} className="order">
            <h3>Order #{order.id}</h3>
            <p><strong>Name:</strong> {order.name}</p>
            <p><strong>Address:</strong> {order.address}</p>
            <p><strong>Phone Number:</strong> {order.phoneNumber}</p>
            <p><strong>Date:</strong> {new Date(order.created_at).toLocaleDateString()}</p>

            <h4>Items:</h4>
            <ul>
              {order.items.map((item, index) => (
                <li key={index}>
                  {item.product_name} - {item.product_price}
                </li>
                
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
}

export default OrderList;
