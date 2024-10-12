import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PropertyDetails from './pages/PropertyDetails';
import RootLayout from './RootLayout'; // Ensure RootLayout is imported
import UserProfile from './pages/user-profile/UserProfile';
import UserLoginStore from './contexts/UserLoginStore'; // Import UserLoginStore

const App = () => {
  return (
    <UserLoginStore> {/* Wrap with UserLoginStore */}
      <div className='max-w-[1440px] mx-auto bg-[#f5f5f5]'>
        <Routes>
          <Route element={<RootLayout />}> {/* Wrap with RootLayout */}
            <Route path='/' element={<Home />} />
            <Route path='/property/:id' element={<PropertyDetails />} />
            <Route path='/login' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/user-profile' element={<UserProfile />} />
          </Route>
        </Routes>
      </div>
    </UserLoginStore>
  );
};

export default App;
