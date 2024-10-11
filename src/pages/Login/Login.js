import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import './Login.css'; // Ensure you have the CSS file for styling

function Login() {
  let { register, handleSubmit, formState: { errors } } = useForm();
  let navigate = useNavigate();
  let [userCredErr, setUserCredErr] = useState('');

  async function onUserLogin(userCredentialsObj) {
    let res = await fetch(`http://localhost:3000/users?username=${userCredentialsObj.username}&password=${userCredentialsObj.password}`);
    let usersArray = await res.json();
    
    if (usersArray.length === 0) {
      setUserCredErr('Username/password are incorrect');
    } else {
      navigate('/user-profile');
    }
  } 

  return (
    <div className="login-container">
      <h2>Login</h2>
      {userCredErr && <p className='error'>{userCredErr}</p>}
      <form onSubmit={handleSubmit(onUserLogin)}>
        <div>
          <label htmlFor='email'>Email:</label>
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
