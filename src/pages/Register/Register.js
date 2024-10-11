import React, { useState } from 'react';
import './Register.css';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom'; 

const Register = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [error, setErr] = useState("");
  const navigate = useNavigate();

  async function onUserRegister(newUser) {
    try {
      let res = await fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newUser),
      });

      // Check for successful response
      if (res.status === 201) { // Changed from res.state to res.status
        navigate('/login');
      } else {
        // Handle non-successful response
        const errorData = await res.json();
        setErr(errorData.message || "Registration failed.");
      }
    } catch (err) {
      setErr(err.message);
    }
  }

  return (
    <div className="signup-container">
      <div className="signup-card">
        <h2>Sign Up</h2>
        <form onSubmit={handleSubmit(onUserRegister)}>
          <div className="form-group">
            <label htmlFor='name'>Name</label>
            <input
              type="text"
              {...register('name', { required: true })}
              placeholder="Enter your name"
            />
            {errors.name?.type === 'required' && <span className='error'>This field is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor='email'>Email</label>
            <input
              type="email"
              {...register('email', { required: true })}
              placeholder="Enter your email"
            />
            {errors.email?.type === 'required' && <span className='error'>This field is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor='password'>Password</label>
            <input
              type="password"
              {...register('password', { required: true })}
              placeholder="Enter your password"
            />
            {errors.password?.type === 'required' && <span className='error'>This field is required</span>}
          </div>
          <div className="form-group">
            <label htmlFor='confirmPassword'>Confirm Password</label>
            <input
              type="password"
              {...register('confirmPassword', { required: true })}
              placeholder="Confirm your password"
            />
            {errors.confirmPassword?.type === 'required' && <span className='error'>This field is required</span>}
          </div>
          {error && <span className='error'>{error}</span>}
          <button type="submit" className="btn">Sign Up</button>
        </form>
      </div>
    </div>
  );
};

export default Register;
