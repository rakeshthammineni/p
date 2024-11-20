import React, { useState } from 'react';

function Cart({ cart }) {
  const [isCheckout, setIsCheckout] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    phoneNumber: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();


    const data = new FormData();
    data.append('name', formData.name);
    data.append('address', formData.address);
    data.append('phoneNumber', formData.phoneNumber);
    data.append('cart', JSON.stringify(cart)); 

    try {
      const response = await fetch('http://localhost/submitOrder.php', {
        method: 'POST',
        body: data,
      });

      const result = await response.text();
      alert(result);
    } catch (error) {
      console.error('Error:', error);
      alert('Error submitting order');
    }
  };

  return (
    <div className="cart">
      <h2 className="big-text">Your Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index}>
              <h4>{item.name}</h4>
              <p>{item.price}</p>
            </li>
          ))}
        </ul>
      )}

      <button className="button" onClick={() => setIsCheckout(true)}>
        Check Out
      </button>

      {isCheckout && (
        <div className="checkout-form">
          <h3>Enter Your Details</h3>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Address:</label>
              <input
                type="text"
                name="address"
                value={formData.address}
                onChange={handleInputChange}
                required
              />
            </div>
            <div>
              <label>Phone Number:</label>
              <input
                type="tel"
                name="phoneNumber"
                value={formData.phoneNumber}
                onChange={handleInputChange}
                required
              />
            </div>
            <button type="submit" className="button">
              Submit
            </button>
          </form>
        </div>
      )}
    </div>
  );
}

export default Cart;
