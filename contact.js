import React from 'react';

function Contact() {
  return (
    <div className='contact-container'>
        <div className='big-text'>About Us</div>
        <img className='image' src="/Supermarket.png"></img>
        <h1>Kanigiri Supermarket</h1>
        <p ><h1 className='big-text'>Address:</h1> 2-36, YSR Rd, behind Muthoot Finance, Kothapeta, Kanigiri, Andhra Pradesh 523230</p>
        <a href='https://maps.app.goo.gl/UE1qsKtZFd4e4E9p8'>Click here for Link</a>
        <p><h1 className='big-text'>Service options:</h1> Offers same-day delivery</p>

      <div className='big-text'>Contact Us</div>
      <div className='contact-details'>
        <p>If you have any questions, Any issues with the product ,feel free to reach out to us on, </p>
        
        <div className='contact-item'>
          <span>WhatsApp Number:</span>
          <a className='contact-link'>+91 94411 22013</a>
          <p><span>Contact Number: </span>
          <a className='contact-link'>+91 90007 79950</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Contact;
