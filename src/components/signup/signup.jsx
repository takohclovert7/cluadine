import logo from "../../images/backgroundLogo.png"
import "./signup.css"
import React, { useState } from 'react';
import Navbar from "../landingPage/navbar/navbar";
function Signup() {


       
        const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

    return (
      <div>
 <div  id="signupHeader">
    
    <Navbar />

      </div>
      <div style={{display:"flex"}} >
  <div id="logo"  > 
<img  class="img-fluid" src={logo} alt="logo not found"  />
  </div>
      
  <div id="signupForm" >  


  <div class="container">

<div class="card " id="card" >
<article class="card-body mx-auto">
	<h4 class="card-title mt-3 text-center">Create Account</h4>
	<p class="text-center">Get started with your free account</p>
	<p>
		<a href="" class="btn btn-block btn-twitter"> <i class="fab fa-google"></i>   Signup via Gmail</a>
		<a href="" class="btn btn-block btn-facebook"> <i class="fab fa-facebook-f"></i>   Signup via facebook</a>
	</p>
	<p class="divider-text">
        <span class="bg-light">OR</span>
    </p>
	<form>
	<div class="form-group input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
        <input name="fullName" class="form-control" placeholder="Full name" type="text" required  />
    </div> 
    <div class="form-group input-group">
		<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-user"></i> </span>
		 </div>
        <input name="userName" class="form-control" placeholder="user name" type="text" required  />
    </div> 
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		 </div>
        <input name="email" class="form-control" placeholder="Email address" type="email" required /> 
    </div>
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-phone"></i> </span>
		</div>
		<select class="custom-select" style={{maxWidth: "95px"}} required >
		    <option selected="">+237</option>
		    <option value="1">+240</option>
		    <option value="2">+19855</option>
		    <option value="3">+701</option>
		</select>
    	<input name="phone" class="form-control" placeholder="Phone number" type="text" required />
    </div> 
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-building"></i> </span>
		</div>
		<select class="form-control" required >
			<option selected=""> Select gender</option>
			<option>Male</option>
			<option>Female</option>
			<option>rather not say</option>
		</select>
	</div> 
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input class="form-control" placeholder="Create password" type="password" required  />
    </div>
    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input class="form-control" placeholder="Repeat password" type="password" required  />
    </div>          

    <div className="form-check">
      <input
        type="checkbox"
        className="form-check-input"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label className="form-check-label">
      Accept terms and conditions
      </label>
    </div>

    <div class="form-group">
        <button type="submit" class="btn btn-primary btn-block"> Create Account  </button>
    </div>     
    <p class="text-center">Have an account? <a href="">Log In</a> </p>                                                                 
</form>
</article>
</div>


</div> 



  </div>
      
          </div>
          </div>
    );
  }
  
  export default Signup;