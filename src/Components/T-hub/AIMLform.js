import 'bootstrap/dist/css/bootstrap.min.css';
function AIML(){
    return(
        <div className='container'>
             <center><h1>AIML Register Page</h1></center><br></br>
            <div className='row justify-content-center'>
                <div className='col-md-6'>
                    <form>
                        <label htmlFor='username' className='form-label'>Username</label>
                        <input type='text' name='username' className='form-control'></input>
                        <label htmlFor='pinno' className='form-label'>Pinno</label>
                        <input type='text' name='username' className='form-control'></input>
                        <label htmlFor='email' className='form-label'>Email</label>
                        <input type='email' name='email' className='form-control'></input>
                        <label htmlFor='password' className='form-label'>Password</label>
                        <input type='password' name='password' className='form-control'></input>
                        <label htmlFor='clgname' className='form-label'>College Name</label>
                        <input type='text' name='clgname' className='form-control'></input>
                        <br></br>
                        <select  className='form-control'>
                            <option>Select your branch</option>
                            <option value="CCN">CCN</option>
                            <option value="CME">CME</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="CE">CE</option>
                            <option value="ME">ME</option>
                        </select><br></br>
                        <label htmlFor='phonenum' className='form-label'>Mobile Number</label>
                        <input type='number' name='phonenum' className='form-control'></input>
                        <br></br>
                        <button className=' btn-primary btn' type='submit' >Register</button>
                    </form>
                </div>
            </div>
        </div>
    )
}
export default AIML