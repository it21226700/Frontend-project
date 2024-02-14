import React, { useState } from "react";
import "./ContactUs.css";

export default function Contact() {
  const [formValues, setFormValues] = useState({
    name: '',
    phone: '',
    email: '',
    type: [],
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    if (type === "checkbox") {
      setFormValues({
        ...formValues,
        type: checked
          ? [...formValues.type, value]
          : formValues.type.filter((typeValue) => typeValue !== value),
      });
    } else {
      setFormValues({ ...formValues, [name]: value });
    }
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formValues.name.trim()) {
      newErrors.name = 'Name is required';
    }
    if (!formValues.phone.trim() || formValues.phone.length < 10) {
      newErrors.phone = 'Valid phone number is required';
    }
    if (!/\S+@\S+\.\S+/.test(formValues.email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!formValues.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    if (!formValues.message.trim()) {
      newErrors.message = 'Message is required';
    }
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log('Form is valid, sending data:', formValues);
      // Here you can add your form submission logic, for example, an API call
      setFormValues({
        name: '',
        phone: '',
        email: '',
        type: [],
        subject: '',
        message: '',
      });
      setErrors({}); // Reset errors state if form submission is successful
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <div className='contact'>
      <form className='form_body' onSubmit={handleSubmit}>
        <h3>Contact me</h3>
        <div className='firstRow'>
          <input
            type='text'
            name='name'
            placeholder='Enter Your Name'
            value={formValues.name}
            onChange={handleInputChange}
            required
          />
          <input
            type='text' // Changed to 'text' to handle validation in handleSubmit
            name='phone'
            placeholder='Enter Your Phone'
            value={formValues.phone}
            onChange={handleInputChange}
            required
          />
        </div>
        <input
          type='email'
          name='email'
          placeholder='Enter Your Email'
          value={formValues.email}
          onChange={handleInputChange}
          required
        />

        <br />
        <div className='checkbox'>
          <label className='label_a'>Business</label> {/* Corrected 'lable' to 'label' */}
          <input
            type="checkbox"
            id="business"
            name="type"
            value="business"
            onChange={handleInputChange}
            checked={formValues.type.includes("business")}
          />
          <label className='label_a'>Academic</label> {/* Corrected 'lable' to 'label' */}
          <input
            type="checkbox"
            id="academic"
            name="type"
            value="academic"
            onChange={handleInputChange}
            checked={formValues.type.includes("academic")}
          />
        </div>

        <br />
        <input
          type='text'
          name='subject'
          placeholder='Enter Your Subject'
          value={formValues.subject}
          onChange={handleInputChange}
          required
        />

        <br />
        <textarea
          name='message'
          placeholder='Enter Your Message'
          value={formValues.message}
          onChange={handleInputChange}
          required
        />
        <br />
        <button type='submit'>Submit</button>

        {/* Optionally display errors */}
        {Object.keys(errors).map((key) => (
          <div key={key} style={{ color: "red" }}>
            {errors[key]}
          </div>
        ))}
      </form>
    </div>
  );
}
