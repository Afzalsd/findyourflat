import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserLoginContext } from '../../contexts/UserLoginContext';
import './Login.css';

function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { err, setErr, loginUser } = useContext(UserLoginContext);
  const navigate = useNavigate();
  const [userCredErr, setUserCredErr] = useState('');

  const handleLogin = async (userCredentialsObj) => {
    try {
      let res = await fetch(`http://localhost:3000/users?email=${userCredentialsObj.email}`);
      let usersArray = await res.json();

      // Check if the user exists
      if (usersArray.length === 0) {
        setErr('Username is incorrect');
      } else {
        const user = usersArray[0]; // Get the first user from the array

        // Check if the password matches
        if (user.password !== userCredentialsObj.password) {
          setUserCredErr('Password is incorrect');
        } else {
          // If credentials are correct, log the user in
          loginUser(user);
          navigate('/user-profile');
        }
      }
    } catch (error) {
      setErr('An error occurred during login. Please try again.');
    }
  };

  return (
    <div className="login-container">
      {err && <p className='error'>{err}</p>}
      {userCredErr && <p className='error'>{userCredErr}</p>} {/* Display password error */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label htmlFor='email'>Email:</label>
          <input
            type="email"
            {...register('email', { required: true })}
            placeholder='Enter your email'
          />
          {errors.username && <span className='error'>This field is required</span>}
        </div>
        <div>
          <label htmlFor='password'>Password:</label>
          <input
            type="password"
            {...register('password', { required: true })}
            placeholder='Enter your password'
          />
          {errors.password && <span className='error'>This field is required</span>}
        </div>
        <button className='btn' type="submit">Login</button>
      </form>
    </div>
  );
}

export default Login;
