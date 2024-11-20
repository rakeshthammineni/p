import React from 'react';


function Home({ addToCart }) {
  const products = [
    { name: 'Colgate ToothPaste', price: '400 Rs/-', img: '/toothpaste.jpg' },
    { name: 'ToothBrush Pack', price: '160 Rs/-', img: '/toothbrush.jpg' },
    { name: 'Santoor Soaps', price: '260 Rs/-', img: '/santoor.jpg' },
    { name: 'Head and Shoulders Shampoo', price: '150 Rs/-', img: '/Shampoo.jpg' },
    { name: 'Ariel Liquid', price: '450 Rs/-', img: './ariel.jpg' },
    { name: '5 Star', price: '10 Rs/-', img: '/5star.jpg' },
    { name: 'Hershey Kisses', price: '300 Rs/-', img: '/Hershey.jpg' },
    { name: 'Kit-Kat', price: '10 Rs/-', img: '/kitkat.jpg' },
    { name: 'Hit', price: '150 Rs/-', img: '/Hit.jpg' },
    { name: 'Mosquito Racket', price: '400 Rs/-', img: '/racket.jpg' },
    { name: 'Pistachios', price: '329 Rs/-', img: '/pisrachios.jpg' },
    { name: 'Lays Chips', price: '20 Rs/-', img: '/lays.jpg' },
  ];

  return (
    <div className="home-content">
      <div className="big-text">
        <p>Welcome To Our Store</p>
      </div>

      <div className="tagline">
        Where Quality is First... Price is Next...
      </div>

      <h1>Our Products</h1>

      <div className="products-container">
        {products.map((product, index) => (
          <div className="product-card" key={index}>
            <div className="product-image">
              <img src={product.img} alt={product.name} />
            </div>
            <div className="product-name">{product.name}</div>
            <div className="product-price">{product.price}</div>
            <button className="add-to-cart" onClick={() => addToCart(product)}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;
