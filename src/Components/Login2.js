import React, { useState } from "react"; 

function Login()
{
 
    const [value, setValue] = useState(""); 
    const [result, setResult] = useState(""); 
    function handleSubmit(e) { 
        e.preventDefault(); 
        setResult( 
            "Form has been submitted with with Input: " + 
                value 
        ); 
    } 
    function handleChange(e) { 
        setValue(e.target.value); 
        setResult(""); 
    } 
         
    return(
       <div>
        <form onSubmit={handleSubmit}>
        <h1>Login form</h1><br></br><br></br>
        <label> Name:</label>
        <input type="text" onInput={handleChange}></input><br></br>
        <br></br>
        <label> Password:</label>
        <input type="password"></input>
        <br></br>
        <button type="submit" >Submit</button>
        </form>
          <div> 
          <h4>{result}</h4> 
         </div> 
         </div>
       
    );
}
export default Login;