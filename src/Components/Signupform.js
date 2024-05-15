import 'bootstrap/dist/css/bootstrap.min.css';

function SignUp(){
    return(
        <div className='container'>
             <center><h1>SignUp Page</h1></center><br></br>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <form>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='email' name='email' className='form-control'></input>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input type='password' name='password' className='form-control'></input>
                        <label htmlFor='username' className='form-label'>Username</label>
                        <input type='text' name='username' className='form-control'></input>
                        <br></br>
                        <button className=' btn-primary btn' type='submit'>Submit</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default SignUp