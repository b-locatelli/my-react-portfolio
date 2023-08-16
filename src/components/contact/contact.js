import React from 'react';
import { useState } from 'react';
import './contact.css';

function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [touchedFields, setTouchedFields] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleblur = (e) => {
    const { name } = e.target;
    setTouchedFields((prevTouched) => ({
      ...prevTouched,
      [name]: true,
    }));
  };

  return ( 
    <div className='contact'>
      <form className='form'>
        <h2 className='contact-header'>Contact Form</h2>
          <div>
            <label htmlFor='name'>Name</label>
            <input type='text' name='name' value={formData.name} onChange={handleChange} onBlur={handleblur}></input>
            {touchedFields && !formData.name && ( <p className='error'>Name must be entered!</p>)}
          </div>
          <div>
            <label htmlFor='email'>Email</label>
            <input type='email' name='email' value={formData.email} onChange={handleChange} onBlur={handleblur}></input>
            {touchedFields && !formData.email && ( <p className='error'>Email must be entered!</p>)}
          </div>
          <div>
            <label htmlFor='message'>Message</label>
            <textarea rows='5' name='message' value={formData.message} onChange={handleChange} onBlur={handleblur}></textarea>
            {touchedFields && !formData.message && ( <p className='error'>Mssage must be entered!</p>)}
          </div>
        <button type='submit'>Submit</button>
      </form>
    </div>
    )
};

export default Contact;