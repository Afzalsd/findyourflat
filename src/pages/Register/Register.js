import React, { useState } from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';

const Register = () => {
  const { handleSubmit, register, formState: { errors } } = useForm();

  const handleSignup = async (data) => {
    console.log(data);
    try {
      const response = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const result = await response.json();
      console.log('Success:', result);
      alert('Registered successfully!'); // Set the success message
    } catch (error) {
      console.error('Error:', error);
      alert('Registration failed. Please try again.'); // Optional: handle error message
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignup)}>
          <div className="form-group">
            <label htmlFor='name'>Name</label>
            <input
              type="text"
              {...register('name', { required: true })}
              placeholder="Enter your name"
            />
          </div>
          <div className="form-group">
            <label htmlFor='email'>Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              placeholder="Enter your email"
            />
          </div>
          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              {...register('password', { required: true })}
              placeholder="Enter your password"
            />
          </div>
          <div className="form-group">
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type="password"
              {...register('confirmPassword', { required: true })}
              placeholder="Confirm your password"
            />
          </div>
          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
