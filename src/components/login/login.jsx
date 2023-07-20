import React from "react";
import "./login.css"
import Navbar from "../landingPage/navbar/navbar";
import logo from "../../images/backgroundLogo.png"
function Login(){

    return(
<div>
<div  id="signupHeader">
    
    <Navbar />

      </div>




        <div  style={{display:"flex"}}>
        <div id="logo"  > 
<img  class="img-fluid" src={logo} alt="logo not found"  />
  </div>

       <div id="loginForm">
  
       <section class="vh-60 gradient-custom">
  <div class="container py-2 h-70">
    <div class="d-flex justify-content-center align-items-center h-100">

        <div class="card text-black" style={{borderRadius:"1rem"}}>
          <div class="card-body p-3 text-center">

            <div class="mb-md-3 mt-md-3 pb-5">

              <h2 class="fw-bold mb-2 text-uppercase" style={{fontWeight:"bold"}}>Login</h2>
              <p class="text-black-50 mb-5" style={{fontWeight:"bold"}}>Please enter your login and password!</p>


              <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-envelope"></i> </span>
		 </div>
        <input name="email" class="form-control" placeholder="Email address" type="email" required /> 
    </div>


    <div class="form-group input-group">
    	<div class="input-group-prepend">
		    <span class="input-group-text"> <i class="fa fa-lock"></i> </span>
		</div>
        <input class="form-control" placeholder="Enter password" type="password" required  />
    </div>

              <p class="small mb-2 pb-lg-2"><a class="text-dark-50" href="#!">Forgot password?</a></p>

              <button class="btn btn-primary btn-block btn-lg px-5" type="submit"  style={{fontWeight:"bold"}}>Login</button>

              <p class="divider-text">
        <span class="bg-light">OR</span>
    </p>

              <div class="d-flex justify-content-center text-center mt-4 pt-1">
                Login with
                <a href="#!" class="text-white btn btn-primary rounded-circle mx-3"><i class="fab fa-facebook-f fa-lg"></i></a>
             
                <a href="#!" class="text-white btn btn-primary rounded-circle"><i class="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p class="mb-0">Don't have an account? <a href="#!" class="text-primary-50 fw-bold">Sign Up</a>
              </p>
            </div>

          </div>
    
      </div>
    </div>
  </div>
</section>
       </div>
        </div>
        </div>
    );
}

export default Login;