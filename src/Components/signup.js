
function SignUp(){
    
    
    function handleSubmit(e) { 
        e.preventDefault(); 
        
    } 
    
    return (
        <div>
            <center><h1>Sign Up</h1></center>
            <form onSubmit={handleSubmit} className="anotherform">
                <label for="email">Email</label><br></br>
                <input type="email" placeholder="Enter Email"></input><br></br>
                <label for="pass">Password</label><br></br>
                <input type="password" placeholder="Enter Password"></input><br></br>
                <label for="username">User Name</label><br></br>
                <input type="text" placeholder="Enter User Name"></input><br></br>
                <button type="submit" >Submit</button>
            </form>
        </div>
    )
}
export default SignUp