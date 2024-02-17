// Contact.jsx
import React, { useState, useCallback } from 'react';

const useForm = (initialState, validate) => {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});

  const handleChange = useCallback((event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  }, [values]);

  const handleSubmit = useCallback((event) => {
    event.preventDefault();
    const validationErrors = validate(values);
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length ===  0) {
      // Send form data to server or handle submission
      console.log(values);
      // Reset form after submission
      setValues(initialState);
    }
  }, [values, initialState, validate]);

  return { values, errors, handleChange, handleSubmit };
};

const validateForm = (values) => {
  let errors = {};

  if (!values.name.trim()) {
    errors.name = 'Name is required';
  }

  if (!values.email.trim()) {
    errors.email = 'Email is required';
  } else if (!validateEmail(values.email)) {
    errors.email = 'Invalid email address';
  }

  if (!values.message.trim()) {
    errors.message = 'Message is required';
  }

  return errors;
};

const validateEmail = (email) => {
  const re = /\S+@\S+\.\S+/;
  return re.test(email);
};

const Contact = () => {
  const initialState = {
    name: '',
    email: '',
    message: ''
  };

  const { values, errors, handleChange, handleSubmit } = useForm(initialState, validateForm);
  const [submitting, setSubmitting] = useState(false);

  return (
    <div className='main-content'>
    <section id="contact">
      <h2>Contact</h2>
      <form id="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.name}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}
        </div>
        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            id="message"
            name="message"
            value={values.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}
        </div>
        <button type="submit" disabled={submitting}>Submit</button>
      </form>
    </section>
    </div>
  );
};

export default Contact;
