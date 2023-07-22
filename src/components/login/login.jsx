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
<img  className="img-fluid" src={logo} alt="logo not found"  />
  </div>

       <div id="loginForm">
  
       <section className="vh-60 gradient-custom">
  <div className="container py-2 h-70">
    <div className="d-flex justify-content-center align-items-center h-100">

        <div className="card text-black" style={{borderRadius:"1rem"}}>
          <div className="card-body p-3 text-center">

            <div className="mb-md-3 mt-md-3 pb-5">

              <h2 className="fw-bold mb-2 text-uppercase" style={{fontWeight:"bold"}}>Login</h2>
              <p className="text-black-50 mb-5" style={{fontWeight:"bold"}}>Please enter your login and password!</p>


              <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-envelope"></i> </span>
		 </div>
        <input name="email" className="form-control" placeholder="Email address" type="email" required /> 
    </div>


    <div className="form-group input-group">
    	<div className="input-group-prepend">
		    <span className="input-group-text"> <i className="fa fa-lock"></i> </span>
		</div>
        <input className="form-control" placeholder="Enter password" type="password" required  />
    </div>

              <p className="small mb-2 pb-lg-2"><a className="text-dark-50" href="#!">Forgot password?</a></p>

              <button className="btn btn-primary btn-block btn-lg px-5" type="submit"  style={{fontWeight:"bold"}}>Login</button>

              <p className="divider-text">
        <span className="bg-light">OR</span>
    </p>

              <div className="d-flex justify-content-center text-center mt-4 pt-1">
                Login with
                <a href="#!" className="text-white btn btn-primary rounded-circle mx-3"><i className="fab fa-facebook-f fa-lg"></i></a>
             
                <a href="#!" className="text-white btn btn-primary rounded-circle"><i className="fab fa-google fa-lg"></i></a>
              </div>

            </div>

            <div>
              <p className="mb-0">Don't have an account? <a href="#!" className="text-primary-50 fw-bold">Sign Up</a>
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