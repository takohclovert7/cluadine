import logo from "../../images/backgroundLogo.png"
import "./signup.css"
import React, { useState } from 'react';
import Navbar from "../landingPage/navbar/navbar";
import FashionCard from "../cards/fahionCard/fashionCard";
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
<img     className="img-fluid" src={logo} alt="logo not found"  />
  </div>

      
  <div id="signupForm" >  


  <div    className="container">

<div    className="card " id="card" >
<article    className="card-body mx-auto">
	<h4    className="card-title mt-3 text-center">Create Account</h4>
	<p    className="text-center">Get started with your free account</p>
	<p>
		<a href=""    className="btn btn-block btn-twitter"> <i    className="fab fa-google"></i>   Signup via Gmail</a>
		<a href=""    className="btn btn-block btn-facebook"> <i    className="fab fa-facebook-f"></i>   Signup via facebook</a>
	</p>
	<p    className="divider-text">
        <span    className="bg-light">OR</span>
    </p>
	<form>
	<div    className="form-group input-group">
		<div    className="input-group-prepend">
		    <span    className="input-group-text"> <i    className="fa fa-user"></i> </span>
		 </div>
        <input name="fullName"    className="form-control" placeholder="Full name" type="text" required  />
    </div> 
    <div    className="form-group input-group">
		<div    className="input-group-prepend">
		    <span    className="input-group-text"> <i    className="fa fa-user"></i> </span>
		 </div>
        <input name="userName"    className="form-control" placeholder="user name" type="text" required  />
    </div> 
    <div    className="form-group input-group">
    	<div    className="input-group-prepend">
		    <span    className="input-group-text"> <i    className="fa fa-envelope"></i> </span>
		 </div>
        <input name="email"    className="form-control" placeholder="Email address" type="email" required /> 
    </div>
    <div    className="form-group input-group">
    	<div    className="input-group-prepend">
		    <span    className="input-group-text"> <i    className="fa fa-phone"></i> </span>
		</div>
		<select    className="custom-select" style={{maxWidth: "95px"}} required >
		    <option selected="">+237</option>
		    <option value="1">+240</option>
		    <option value="2">+19855</option>
		    <option value="3">+701</option>
		</select>
    	<input name="phone"    className="form-control" placeholder="Phone number" type="text" required />
    </div> 
    <div    className="form-group input-group">
    	<div    className="input-group-prepend">
		    <span    className="input-group-text"> <i    className="fa fa-building"></i> </span>
		</div>
		<select    className="form-control" required >
			<option selected=""> Select gender</option>
			<option>Male</option>
			<option>Female</option>
			<option>rather not say</option>
		</select>
	</div> 
    <div    className="form-group input-group">
    	<div    className="input-group-prepend">
		    <span    className="input-group-text"> <i    className="fa fa-lock"></i> </span>
		</div>
        <input    className="form-control" placeholder="Create password" type="password" required  />
    </div>
    <div    className="form-group input-group">
    	<div    className="input-group-prepend">
		    <span    className="input-group-text"> <i    className="fa fa-lock"></i> </span>
		</div>
        <input    className="form-control" placeholder="Repeat password" type="password" required  />
    </div>          

    <div    classNameName="form-check">
      <input
        type="checkbox"
           classNameName="form-check-input"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label    classNameName="form-check-label">
      Accept terms and conditions
      </label>
    </div>

    <div    className="form-group">
        <button type="submit"    className="btn btn-primary btn-block"> Create Account  </button>
    </div>     
    <p       classNameName="text-center">Have an account? <a href="">Log In</a> </p>                                                                 
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