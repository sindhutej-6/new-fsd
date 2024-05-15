import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import LoginForm from './Components/Loginform.js';
import SignUp from './Components/Signupform.js';
import {BrowserRouter,Routes,Route} from "react-router-dom";
function App(){
  return (
    <>
      <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="Loginform">Login</Nav.Link>
            <Nav.Link href="SignUp">SignUp</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <br />
      <BrowserRouter>
      <Routes>
    <Route path='Loginform' element={<LoginForm/>}></Route>
    <Route path='SignUp' element={<SignUp/>}></Route>
    </Routes> 
     </BrowserRouter>
    </>
  );
}

export default App;