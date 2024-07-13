import React from 'react';
import './Contact.css';


const Contact = () => {
  return (
    <div className='contact'>
      <div className="contact_details">
        <h2>Contact Us</h2>
        <p><span>Phone:</span>+91 9856062143 / +91 9485177344</p>
        <p><span>Email:</span> sylvanhorizon329@gmail.com</p>
        <p><span>Address</span> Nongsder, block 1, Shillong Meghalaya</p>
        <a href="https://www.instagram.com/sylvan_horizon_resort?utm_source=qr&igsh=dHNvbXoxdnd5bjcx"><i className='fab fa-instagram'></i></a>
        <a href="https://wa.me/9856062143"><i className='fab fa-whatsapp' ></i></a>
      </div>
      
      <div className="map">
        <h3>View our location on Google Maps</h3>
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d883.6081599846927!2d91.91794815907805!3d25.675926645143893!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x375a9f07d5c2b293%3A0xe18034ae6f158d4f!2sSylvan%20Horizon%20Resort!5e1!3m2!1sen!2sin!4v1719826406719!5m2!1sen!2sin" 
          allowFullScreen="" 
          loading="lazy" 
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}

export default Contact;
