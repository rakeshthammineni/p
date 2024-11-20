import React from 'react';

function Button({ buttons, isSelected, setIsSelected }) {
  return (
    <div className='Button-cont'>
      <div className='button-container'>
        {buttons.map((text, index) => (
          <button
            key={index}
            className={isSelected === index ? "Selected-button" : "button"}
            onClick={() => setIsSelected(index)}
          >
            {text}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Button;
