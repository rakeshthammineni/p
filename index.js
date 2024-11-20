import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import Button from './comp/button';
import './App.css';
import Kangira from './comp/Header';
import Home from './comp/Home';
import Contact from './comp/contact';
import Product from './comp/product';
import Orders from './comp/Orders'
import Cart from './comp/Cart';

const buttons = ["Home", "Products", "About Us", "Cart","Orders"];

const RenderComp = ({ index, addToCart, cart }) => {
  switch (index) {
    case 0:
      return <Home addToCart={addToCart} />;
    case 1:
      return <Product addToCart={addToCart} />;
    case 2:
      return <Contact />;
    case 3:
      return <Cart cart={cart} />;
    case 4:
      return <Orders/>;
    default:
      return null;
  }
};

function Game() {
  const [isSelected, setIsSelected] = useState(0);
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  return (
    <div className="app-cont">
      <Kangira />
      <div className="content">
        <div className="side-div">
          <RenderComp index={isSelected} addToCart={addToCart} cart={cart} />
        </div>
      </div>
      <Button buttons={buttons} isSelected={isSelected} setIsSelected={setIsSelected} />
    </div>
  );
}

ReactDOM.render(<Game />, document.getElementById('root'));
