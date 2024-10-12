import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../assets/img/logo.svg';
import { UserLoginContext } from '../contexts/UserLoginContext';
const Header = () => {
  const { logoutUser, status } = useContext(UserLoginContext);
  
  return (
    <header className='py-6 mb-12 border-b flex flex-wrap'>
      <div className="container mx-auto flex justify-between items-center">
        <Link to='/'>
          <img src={Logo} alt="logo" className="logo" />
        </Link>

        <div className='flex items-center gap-6'>
          {status ? 
          (
            <>
              <Link to='/login' className='hover:text-violet-900 transition' onClick={logoutUser}>Logout</Link>
              <Link to='/user-profile'><img className='rounded-full w-10' src="https://th.bing.com/th/id/OIP.Lpx9j83qR_cfQuaPHuvwWQHaHw?w=202&h=211&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt=""/></Link>
            </>
          ) : 
          (
            <>
              <Link to='/login' className='hover:text-violet-900 transition'>Login</Link>
              <Link to='/register' className='bg-violet-700 hover:bg-white hover:text-violet-700 text-white px-4 py-3 rounded-lg transition'>Sign up</Link>
            </>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
