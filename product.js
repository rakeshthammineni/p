import React from 'react';

function Product({ addToCart }) {
  const products = [
    { name: 'Colgate ToothPaste', price: '400 Rs/-' },
    { name: 'ToothBrush Pack', price: '160 Rs/-'},
    { name: 'Santoor Soaps', price: '260 Rs/-'},
    { name: 'Head and Shoulders Shampoo', price: '150 Rs/-' },
    { name: 'Ariel Liquid', price: '450 Rs/-'},
    { name: '5 Star', price: '10 Rs/-' },
    { name: 'Hershey Kisses', price: '300 Rs/-' },
    { name: 'Kit-Kat', price: '10 Rs/-'},
    { name: 'Hit', price: '150 Rs/-'},
    { name: 'Mosquito Racket', price: '400 Rs/-'},
    { name: 'Pistachios', price: '329 Rs/-'},
    { name: 'Lays Chips', price: '20 Rs/-'},
    { name: 'Oil packet', price: '70 Rs/-'},
    { name: 'Water Bottle', price: '20 Rs/-'},
    { name: 'Cool Drink', price: '80 Rs/-'},
    { name: 'Ice cream', price: '50 Rs/-'},
    { name: 'Chicken Masala', price: '40 Rs/-'},
    { name: 'Fevistick', price: '20 Rs/-'}
  ];

  return (
    <div className="product-table-container">
      <h1>Our Products</h1>
      <table className="product-table">
        <thead>
          <tr>
            <th>Product Name</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {products.map((product, index) => (
            <tr key={index}>
              <td>{product.name}</td>
              <td>{product.price}</td>
              <td>
                <button className="add-to-cart" onClick={() => addToCart(product)}>
                  Add to Cart
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Product;
