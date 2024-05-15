import Home from './Components/Homepage';
import About from './Components/Aboutpage';
import Contact from './Components/Contactpage';
import Login from './Components/Logintry';
import React from 'react';
import { BrowserRouter, Routes,Route, Link } from 'react-router-dom';
import './Components/Style.css'

function App() {
  return (
    <BrowserRouter>
    <nav>
    <ul class="list">
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="About">About</Link>
      </li>
      <li>
        <Link to="Contact">Contact</Link>
      </li>
      <li>
        <Link to="Login">Login</Link>
      </li>
    </ul>
    </nav>
    <Routes>
      
      <Route path='/' element={<Home />}></Route>
      <Route path='About' element={<About/>}></Route>
      <Route path='contact' element={<Contact />}></Route>
      <Route path='Login' element={<Login />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
