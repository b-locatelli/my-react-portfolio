import React from 'react';
import './contact.css'

function Contact() {
  return ( 
    <div className='contact'>
      <form className='form'>
        <h2 className='contact-header'>Contact Form</h2>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text'></input>
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email'></input>
          </div>
          <div>
            <label htmlFor='message'>Message</label>
            <textarea rows='5'></textarea>
          </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
    )
};

export default Contact;