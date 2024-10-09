import React from 'react';
import {Routes, Route} from 'react-router-dom'
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import PropertyDetails from './pages/PropertyDetails';

const App = () => {
  return( 
  <div className='max-w-[1440px] mx-auto bg-[#f5f5f5]'>
    <Header />
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/property/:id' element={<PropertyDetails />} />
      <Route path='/login' element={<Login />}/>
      <Route path='/register' element={<Register />}/>
    </Routes>
    <Footer />
  </div>
  );
};

export default App;
