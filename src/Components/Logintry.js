
import React, { useState } from "react";


const Login = () => {
  const [name, setName] = useState("");
  const [password, setPass] = useState("");

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handlePassChange = (event) => {
    setPass(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Validate the form
    if (!name) {
      alert("Please enter a name.");
      return;
    }

    if (!password) {
      alert("Please enter an Password.");
      return;
    }

    // Submit the form
    // ...
  };

  return (
    <>
    <center><h1>Login Page</h1></center>
    <div id="form">
    
    <form onSubmit={handleSubmit}><br></br><br></br><br></br>        
      <label for="name">Name</label><br></br>
      <input
        type="text"
        name="name"
        value={name}
        onChange={handleNameChange}
        placeholder="Enter Your Name"
      /><br></br><br></br>
      <label for="password">Password</label><br></br>
      <input
        type="password"
        name="password"
        value={password}
        onChange={handlePassChange}
        placeholder="Enter Your Password"
      /><br></br><br></br>
      <button type="submit">Submit</button>
    </form>
    </div>
    </>
  );
};

export default Login;