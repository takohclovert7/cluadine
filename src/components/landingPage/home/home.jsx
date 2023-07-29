import "./home.css"
import Navbar from "../navbar/navbar";
import FashionCard from "../../cards/fahionCard/fashionCard";
import WigCard from "../../cards/wigCard/wigCard";
import nail from "../../../images/nails.avif"
import Makeup from "../../cards/nailCard/makeupCard";
import make from "../../../images/makeup.jpg"
import Shoe from "../../cards/wigCard/shoeCard";
import { useState,useEffect } from "react";
function Home(){

  const [offset, setOffset] = useState(0);

  // Function to update the offset value to create the sliding effect
  const handleAnimation = () => {
    setOffset((prevOffset) => (prevOffset + 1) % 100);
  };

  // Use useEffect to start the sliding effect on component mount and clean up on unmount
  useEffect(() => {
    const animationInterval = setInterval(handleAnimation, 50); // Change the interval value to control speed
    return () => clearInterval(animationInterval);
  }, []);


    return(
        <div>
   <div  id="homeHeader">
    
    <Navbar />

    <div className="sliding-text-container">
      <div
        className="sliding-text"
        style={{ transform: `translateX(-${offset}%)` }}
      >
    WELCOME
      </div>
    </div>


<div>
  <center>
<h5>To <span style={{color:"blue"}}>Clau's Fashion</span> Where Style Meets Elegance!</h5>
</center>
<p style={{margin:"15px",fontWeight:"800",color:"rgba(0,0,0,0.7)"}}>
At <span style={{color:"blue"}}>Clau's Fashion</span>, we believe that fashion is an art form that empowers individuals to express 
their unique personalities and stories. Step into a world of timeless elegance ,classic
and contemporary trends as we curate an exclusive collection of exquisite fashion designs just for you at a cheaper an affortable prices.
</p>
<p  style={{marginLeft:"15px",fontWeight:"800",color:"rgba(0,0,0,0.7)",marginInlineStart:"15px"}}>
Explore a world of fashion wonders that cater to every occasion - from 
glamorous evening events to chic and comfortable everyday wear. Uncover an extensive range of stylish 
clothing, captivating accessories, and opulent footwear that will elevate your fashion game to new heights.
</p>
</div>




    <div>
 <center>
    <div className="container">
  <div class="row">
    <div className="col-sm-12 col-md-6 col-lg-4 ">
    < FashionCard/>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-4 ">
    < Makeup  image={make} text="Make up" btnText="Book A Make Up Date"/>
    </div>
    <div className="col-lg-4 d-none d-sm-none d-md-none d-lg-block">
    < FashionCard/>

    </div>
 
  </div>
</div>
</center>

<center>
    <div className="container">
  <div class="row">
  <div className="col-sm-12 col-md-12 col-lg-6 ">
  <Shoe  />
    </div>
  <div className="col-lg-6 d-none d-sm-none d-md-none d-lg-block">
    < FashionCard/>
    </div>
   
 
  </div>
</div>
</center>

<center>
    <div className="container">
  <div class="row">
    <div className="col-sm-12 col-md-6 col-lg-4 ">

    < Makeup  image={nail} text="Nail" btnText="Book A Date For Nails Doing"/>
    </div>
    <div className="col-lg-4 d-none d-sm-none d-md-none d-lg-block">
    < FashionCard/>
    </div>
    <div className="col-sm-12 col-md-6 col-lg-4 ">
    < WigCard />
    </div>
   
 
  </div>
</div>
</center>

  
    </div>
  
    </div>


        </div>
    )
}

export default Home;