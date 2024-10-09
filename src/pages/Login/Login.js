import React, { useState } from 'react';
import './Login.css'
import {useForm} from 'react-hook-form'
const Login = () => {
  let {handleSubmit,register,formState: {errors}} = useForm()
  const handleLogin = (e) => {
    console.log(e)
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type="email"
            {...register('email', {required: true})}
            placeholder='Enter your email'
          />
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type="password"
            {...register('password', {required: true})}
            placeholder='Enter your password'
          />
        </div>
        <button className='btn' type="submit">Login</button>
      </form>
    </div>
  );
};

export default Login;
