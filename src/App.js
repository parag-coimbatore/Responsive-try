import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Services from './pages/Services';
import Services1 from './services/Services1';
import Services2 from './services/Services2';
import Services3 from './services/Services3';
import Services4 from './services/Services4';
import Services5 from './services/Services5';
import Services6 from './services/Services6';


function App() {
  return (
    <>
      <Navbar/>

      <Routes>
        <Route exact path='/' element={<Home/>}></Route>

        <Route exact path='/about' element={<About />}></Route>

        <Route exact path='/services' element={<Services />}></Route>

        <Route exact path='/signup' element={<SignUp/>}></Route>
      </Routes>

      <Routes>
        <Route exact path='/service1' element={<Services1/>} to="/service1"></Route>
        <Route exact path='/service2' element={<Services2/>} to="/service2"></Route>
        <Route exact path='/service3' element={<Services3/>} to="/service3"></Route>
        <Route exact path='/service4' element={<Services4/>} to="/service4"></Route>
        <Route exact path='/service5' element={<Services5/>} to="/service5"></Route>
        <Route exact path='/service6' element={<Services6/>} to="/service6"></Route>
      </Routes>

    </>
  );
}

export default App;