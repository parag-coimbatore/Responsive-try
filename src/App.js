import React from 'react'
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Routes} from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import SignUp from './pages/SignUp';
import Services from './pages/Services';


function App() {
  return (
  <>
    <Navbar/>
    <Routes>
      <Route exact path='/' element={<Home/>}></Route>

      <Route exact path='/about' element={<About/>}></Route>

      <Route exact path='/services' element={<Services/>}></Route>

      <Route exact path='/signup' element={<SignUp/>}></Route>
    </Routes>

  </>    
  );
}

export default App;
