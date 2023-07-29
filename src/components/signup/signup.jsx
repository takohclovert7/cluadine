import logo from "../../images/backgroundLogo.png"
import "./signup.css"
import React, { useState,useEffect } from 'react';
import Navbar from "../landingPage/navbar/navbar";
import countries from 'countries-list';
import parsePhoneNumber from 'libphonenumber-js';

function Signup() {
  const countryData = Object.entries(countries.countries).map(([code, countryName]) => ({
    code,
    countryName,
  }));

 
  //  console.log(phoneNumber.isValid());

 const  [formData, setFormData]=useState({
    type:"",
    fullName:"",
    userName:"",
    email:"",
    countryCode:"",
    mobile:"",
    gender:"",
    password:"",
    repeatPassword:""
  })
 
 function handleChange(event){

  setFormData(prevstate=>{
    return {
      ...prevstate,
      [event.target.name]:event.target.value
    }
  })
       console.log(formData)
       }



        const [isChecked, setIsChecked] = useState(false);
const [isCheckedErrorMessage, setIsCheckedErrorMessage]=useState("")
const [mobileErrorMessage, setMobileErrorMessage]=useState("")
const [repeatPasswordErrorMessage, setRepeatPasswordErrorMessage]=useState("")

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };


async function handleSignup(e){
  console.log("about to signup")
e.preventDefault()
setMobileErrorMessage("");
setIsCheckedErrorMessage("")
setRepeatPasswordErrorMessage("")
const phoneNumber = parsePhoneNumber(formData.mobile, `${formData.countryCode}`);

if(phoneNumber.isValid()){
  setMobileErrorMessage("");
if(formData.password===formData.repeatPassword){
  setRepeatPasswordErrorMessage("")
   if(isChecked){
    setIsCheckedErrorMessage("")
// fetch("http://localhost:7000/users/signup/new/user",{
//   method:"POST",
//   body:JSON.stringify(formData),
//   headers: {'Content-Type': 'application/json'}
// }).then(response =>response.json())
// .then(res=>{
//  console.log("data save")
// }).catch(error => {
//   console.error(error);
// });

// login function in here
window.location.reload("/user/dashboard");

  }else{
    setIsCheckedErrorMessage("to proceed accept terms an conditions")
  }
}
else{
  setRepeatPasswordErrorMessage("match repeat password an password")
}

 
}else{
  setMobileErrorMessage("country code an mobile number do not match");
}



}


    return (
      <div>
 <div  id="signupHeader">
    
    <Navbar />
   

      </div>
      <div id="signupBody">
  <div id="logo"  > 
<img     className="img-fluid" src={logo} alt="logo not found"  />
  </div>

      
  <div id="signupForm" >  
<center>

  <div    className="containerSignup">

<div    className="card " id="card" style={{height:"100%"}}>
<article    className="card-body mx-auto" id="card-body-signup">
	<h4    className="card-title mt-3 text-center">Create Account</h4>
	<p    className="text-center">Get started with your free account</p>
	<p>
		<a href=""    className="btn btn-block btn-twitter"> <i    className="fab fa-google"></i>   Signup via Gmail</a>
		<a href=""    className="btn btn-block btn-facebook"> <i    className="fab fa-facebook-f"></i>   Signup via facebook</a>
	</p>
	<p    className="divider-text">
        <span    className="bg-light">OR</span>
    </p>
	<form  onSubmit={handleSignup}>
   
	<div    className="form-group input-group">
		<div    className="input-group-prepend">
		    <span    className="input-group-text"> <i    className="fa fa-user"></i> </span>
		 </div>
        <input name="fullName"   value={formData.fullName} className="form-control" placeholder="Full name" type="text" required onChange={handleChange} />
    </div> 
    <div    className="form-group input-group">
		<div    className="input-group-prepend">
		    <span    className="input-group-text"> <i    className="fa fa-user"></i> </span>
		 </div>
        <input name="userName"  value={formData.userName}  className="form-control" placeholder="user name" type="text" required onChange={handleChange} />
    </div> 
    <div    className="form-group input-group">
    	<div    className="input-group-prepend">
		    <span    className="input-group-text"> <i    className="fa fa-envelope"></i> </span>
		 </div>
        <input name="email"  value={formData.email}  className="form-control" placeholder="Email address" type="email" required  onChange={handleChange}/> 
    </div>
    <div    className="form-group input-group">
    	<div    className="input-group-prepend">
		    <span    className="input-group-text"> <i    className="fa fa-phone"></i> </span>
		</div>
    <select  name="countryCode"  value={formData.countryCode}  className="custom-select" style={{maxWidth: "115px"}} required  onChange={handleChange}>
 <option value="" disabled >country</option>
      {countryData.map(function(countries,countriesIndex){
        return(
          <option key={countriesIndex} value={countries.code}  
          
          >
     {countries.code}(+{countries.countryName.phone})
        </option>
        )
      })}
      </select>
    	<input name="mobile" value={formData.mobile}   className="form-control" placeholder="Phone number" type="text" required  onChange={handleChange} />
    </div> 
    <div style={{color:"red",fontWeight:"bold",marginBottom:"3px"}}>{mobileErrorMessage}</div>
    <div    className="form-group input-group">
    	<div    className="input-group-prepend">
		    <span    className="input-group-text"> <i    className="fa fa-building"></i> </span>
		</div>
   
		<select  name="gender"  className="form-control" required  onChange={handleChange}>
			<option disabled value="" > Select gender</option>
			<option>Male</option>
			<option>Female</option>
	
		</select>
	</div> 
    <div    className="form-group input-group">
    	<div    className="input-group-prepend">
		    <span    className="input-group-text"> <i    className="fa fa-lock"></i> </span>
		</div>
        <input    name="password" value={formData.password}  className="form-control" placeholder="Create password" type="password" required onChange={handleChange} />
    </div>
    <div    className="form-group input-group">
    	<div    className="input-group-prepend">
		    <span    className="input-group-text"> <i    className="fa fa-lock"></i> </span>
		</div>
        <input    name="repeatPassword"  value={formData.repeatPassword}  className="form-control" placeholder="Repeat password" type="password" required  onChange={handleChange}/>
    </div>          
    <div style={{color:"red",fontWeight:"bold",marginBottom:"5px"}}>{repeatPasswordErrorMessage}</div>
    <div    className="form-check">
      <input
        type="checkbox"
           className="form-check-input"
        checked={isChecked}
        onChange={handleCheckboxChange}
      />
      <label    className="form-check-label">
      Accept terms and conditions
      </label>
    </div>
<div style={{color:"red",fontWeight:"bold",marginBottom:"5px"}}>{isCheckedErrorMessage}</div>
    <div    className="form-group">
        <button type="submit"    className="btn btn-primary btn-block"> Create Account  </button>
    </div>     
    <p       className="text-center">Have an account? <a href="">Log In</a> </p>                                                                 
</form>
</article>
</div>


</div> 


</center>
  </div>
      
          </div>
          </div>
    );
  }
  
  export default Signup;