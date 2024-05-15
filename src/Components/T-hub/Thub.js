import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginForm from '../Loginform.js';
import SignUp from '../Signupform.js';
import Thubb from './images/Thubb.png'
import Home from './homepage.js'
import About from '../Aboutpage.js';
import Contact from '../Contactpage.js'
import Team from '../Teampage.js';
import Dropdown from 'react-bootstrap/Dropdown';
import AIML from './AIMLform.js';
import Fsd from './Fullstackform.js';
import Red from './Redhack.js';
import CC from './Cloudform.js';
import './style.css';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function Thub(){
  return (
    <>
      <Navbar bg="light" data-bs-theme="light" >
      <img src={Thubb} className="navb" alt="thub"/>
        <Container>
          <Nav className="a">
          <Nav.Link href="homepage" id='space'>Home</Nav.Link>
            {/* <Nav.Link href="Loginform" id='space'>Login</Nav.Link> */}
            <Dropdown>
            <Dropdown.Toggle variant="light" id='space'>Register</Dropdown.Toggle>
              <Dropdown.Menu>
              <Dropdown.Item href="AIMLform">AIML</Dropdown.Item>
              <Dropdown.Item href="Fullstackform">FSD</Dropdown.Item>
              <Dropdown.Item href="Redhack">Red Hacker</Dropdown.Item>
              <Dropdown.Item href="Cloudform">Cloud Computing</Dropdown.Item>
              
            </Dropdown.Menu>
            </Dropdown>
            <Nav.Link href="SignUp" id='space'>SignUp</Nav.Link>
            <Nav.Link href="Aboutpage" id='space'>About</Nav.Link>
            <Nav.Link href="Contactpage" id='space'>Contact</Nav.Link>
            <Nav.Link href="Teampage" id='space'>Team</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <BrowserRouter>
      <Routes>
    <Route path='homepage' element={<Home/>}></Route>
    <Route path='Loginform' element={<LoginForm/>}></Route>
    <Route path='SignUp' element={<SignUp/>}></Route>
    <Route path='Aboutpage' element={<About/>}></Route>
    <Route path='Contactpage' element={<Contact/>}></Route>
    <Route path='Teampage' element={<Team/>}></Route>
    <Route path='AIMLform' element={<AIML />}></Route>
    <Route path='Fullstackform' element={<Fsd/>}></Route>
    <Route path='Redhack' element={<Red/>}></Route>
    <Route path='Cloudform' element={<CC/>}></Route>
    
    </Routes> 
     </BrowserRouter>
     
    </>
  );
}

export default Thub;