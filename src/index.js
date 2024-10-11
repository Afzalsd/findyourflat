import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './output.css'; 

// Import router
import { BrowserRouter as Router } from 'react-router-dom';
import HouseContextProvider from './components/HouseContext';
import { UserLoginContext } from './contexts/UserLoginContext'; // Ensure the correct path to your context file

const Main = () => {
  const [userLoginStatus, setUserLoginStatus] = useState(false); // Initial login status

  const logoutUser = () => {
    // Implement your logout functionality
    setUserLoginStatus(false);
  };

  return (
    <UserLoginContext.Provider value={{ logoutUser, userLoginStatus }}>
      <HouseContextProvider>
        <App />
      </HouseContextProvider>
    </UserLoginContext.Provider>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Main />
    </Router>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
