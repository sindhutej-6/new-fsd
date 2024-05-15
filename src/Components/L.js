function Log(){
    return(
        <h1>Form Validation</h1>
        <form action="">
            <label for="name" id="name" value="name" >Name (5-50 characters)</label><br>
            <input type="text" class="input1" id="i-1" minlength="5" maxlength="50" onkeyup="inp()" required>
            <p id="inputerror"></p>
            <label for="email" id="email" value="email">Email</label><br>
            <input type="email" class="input1" id="e-1" onkeyup="em()">
            <p id="emailerror"></p>
            <label for="pwd" id="pwd" value="pwd">Password</label><br>
            <input type="password" class="input1" id="pass-1" onkeyup="passw()" maxlength="8">
            <p id="word"></p>
            

            <label for="num" id="num" value="num">Phone Number (1-10 digits)</label><br>
            <input type="tel" class="input1" id="p-1" onkeyup="te()" maxlength="10">
            <p id="telerror"></p>

            <label for="gender" >Gender:</label><br>
            <input type="radio" value="female" id="female" name="gender" required onpointerenter="fem()">Female<br>
            <input type="radio" value="male" id="male" name="gender" required onmouseenter="fem()">Male<br>
            <p id="gender-error"></p>

            <label for="courses">Courses:</label><br>
            <input type="checkbox" id="one" >CPP<br>
            <input type="checkbox" id="one">C<br>
            <input type="checkbox" id="one">Python<br>
            <input type="checkbox" id="one">Java<br>

            <label for="college">Select Your College:</label>
            <select name="college" id="college">
                <option value="acet">ACET</option>
                <option value="aec">AEC</option>
                <option value="acoe">ACOE</option>
            </select><br>

            <label for="address">Address</label><br>
            <textarea name="address" id="address" cols="20" rows="3" placeholder="Address"></textarea>
            <button type="submit" id="submitbtn" onfocus="check()">Submit</button>
        </form>
    </div>
    
    )
}