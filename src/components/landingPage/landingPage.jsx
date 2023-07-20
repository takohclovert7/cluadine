import "./landingPage.css"
import Home from "./home/home"
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';


import Signup from "../signup/signup";
import Login from "../login/login";

function LandingPage(){
 
  

    return(
        <div id="landingPage">
  
     <Router>
     <div>
      <Routes>
      <Route exact path="/" element={<Home />} />
        <Route exact path="/user/signup" element={<Signup />} />

       
        <Route path="/user/login" element={<Login />} />
      </Routes></div>
    </Router>  

     </div>
    
   
    )
}


export default LandingPage