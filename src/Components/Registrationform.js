 import 'bootstrap/dist/css/bootstrap.min.css';
 import Form from 'react-bootstrap/Form';
 import {BrowserRouter,Routes,Route,Link} from "react-router-dom";
 import AIML from './T-hub/AIMLform';

function Register(){
    return(
    <BrowserRouter>
    <select>
    <option>Select</option>
    <option>
            <Link to='AIMLform'>AIML</Link>
    </option>
    </select>
    <Routes>
        <Route path='AIMLform' element={<AIML />}></Route>
    </Routes>
    </BrowserRouter>
    )
}
export default Register;
