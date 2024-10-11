import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { UserLoginContext } from '../../contexts/UserLoginContext';


function Login() {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const { loginUser, err, status } = useContext(UserLoginContext);
  const navigate = useNavigate();
  const [userCredErr, setUserCredErr] = useState('');

  const handleLogin = async (userCredentialsObj) => {
    console.log("Logging in user:", userCredentialsObj); // Log user credentials
    let res = await fetch(`http://localhost:3000/users?username=${userCredentialsObj.username}&password=${userCredentialsObj.password}`);
    let usersArray = await res.json();
    console.log(usersArray); // Log the response

    if (usersArray.length === 0) {
      console.log("Login failed"); // Log if login fails
      setUserCredErr('Username/password are incorrect');
    } else {
      console.log("Login successful, navigating to user profile"); // Log before navigation
      loginUser(usersArray[0]);
      navigate('/user-profile');
    }
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      {userCredErr && <p className='error'>{userCredErr}</p>}
      <form onSubmit={handleSubmit(handleLogin)}>
        <div>
          <label htmlFor='username'>Username:</label>
          <input
            type="email"
            {...register('username', { required: true })}
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
