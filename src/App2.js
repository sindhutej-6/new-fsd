import SignUp from './Components/signup'
import Login from './Components/Logintry'
import React from 'react'
import { BrowserRouter, Route, Link, Routes } from 'react-router-dom'
import "./Components/Style.css"


function App(){
    return(
        <BrowserRouter>
        <ul>
            <li>
                <Link to="/" >Login </Link>
                
            </li>
            <li>
                <Link to="SignUp">SignUp</Link>
            </li>
        </ul>
        <Routes>
            <Route path='/' element={<Login />}></Route>
            <Route path='signup' element={<SignUp />}></Route>
        </Routes>
        </BrowserRouter>
    )
}

export default App