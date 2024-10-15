import React, { useState } from 'react';
import { UserLoginContext } from './UserLoginContext';

function UserLoginStore({children}) {
  let [user, setUser] = useState({});
  let [status, setStatus] = useState(false);
  let [token, setToken] = useState('');
  let [err, setErr] = useState('');

  let loginUser = (obj) => {
    setUser(obj);
    setStatus(true);
    setToken(obj.token);
    setErr('');
  }

  let logoutUser = () => {
    setUser({});
    setStatus(false);
    setToken('');
    setErr('');
  }

  return (
    <UserLoginContext.Provider value={{ user, setUser, loginUser, token, status, err, setErr, logoutUser }}>
      {children}
    </UserLoginContext.Provider>
  );
}

export default UserLoginStore;
