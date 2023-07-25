
import Navbar from "../navbar/navbar";
import "./whatWeOffer.css"
import arrow from "../../../images/icons8-arrow-48.png"
import blackLogo from "../../../images/whatWeOfferLogo.png"
function WhatWeOffer(){

    return(
        <div>

<Navbar />
<h4>SERVICES OFFER BY <span>CLAU'S FASHION</span></h4>
  <div classNameName="container">
  
  <div className="row" style={{marginLeft:"10px",marginRight:"10px"}}>


  <div className="whatWeOffercard col-12 col-sm-12 col-md-6 col-lg-4">

<div className="title">NIALS/MAKE UP STORE</div>

<div className="icon">
<img src={blackLogo} alt="not found"  style={{width:"100px",height:"80px"}}/>

</div>

<div className="features">
<h6 style={{color:"rgba(172, 86, 116,0.7)"}}>Here At <span style={{color:"rgb(172, 86, 116)"}}>CLAU"S FASHION </span>Nial/Make up Store we do..</h6>
 
  <ul>
  <div style={{display:"flex"}}>
      <img src={arrow} alt="not found"  />
  
      <li style={{paddingTop:"2px"}}>Manicure</li></div>
    <div style={{display:"flex"}}>
      <img src={arrow} alt="not found" />
  
      <li style={{paddingTop:"2px"}}>Pedicure</li></div>
    <div style={{display:"flex"}}>
      <img src={arrow} alt="not found"  />
  
      <li style={{paddingTop:"2px"}}>Do Make Up's</li></div>
    
  </ul><br />
<div >
  <div >
  <span style={{color:"red"}}>Read Me !!!</span><br />
<strong style={{color:"lightgray"}}>This serices are done at Clau's Fashion shop locate in Douala Bonaberi</strong><br />
    </div>
<button style={{width:"190px",height:"35px",background:"lightgray",color:"black",textTransform:"uppercase", fontSize:"meduim",fontWeight:"bold"}}>See shop location </button><br />
</div>

</div>

<a href="#" className="btn">Check it out</a>

</div>



    <div className="whatWeOffercard col-12 col-sm-12 col-md-6 col-lg-4">

    <div className="title">CLAU'S FASHION STORE</div>

<div className="icon">
<img src={blackLogo} alt="not found"  style={{width:"100px",height:"80px"}}/>
 
 </div>

<div className="features">
  <h6 style={{color:"rgba(172, 86, 116,0.7)"}}>Here at <span style={{color:"rgb(172, 86, 116)"}}>CLAU"S FASHION </span>We Sell A Variety Of Fashion Wear Including</h6>
  <ul>
    <div style={{display:"flex"}}>
      <img src={arrow} alt="not found"  style={{width:"100px",height:"80px"}} />
  
    <li style={{paddingTop:"2px"}}>Men's Wear For Adults</li>  </div>
    <div style={{display:"flex"}}>
      <img src={arrow} alt="not found" />
    <li style={{paddingTop:"2px"}}> Women's Wear For Adults</li></div>
    <div style={{display:"flex"}}>
      <img src={arrow} alt="not found" />
 
      <li style={{paddingTop:"2px"}}>Men's Wear For Childrien</li></div>
    <div style={{display:"flex"}}>
      <img src={arrow} alt="not found" />
  
      <li style={{paddingTop:"2px"}}>Women's Wear For Childrien</li></div>  
     <div style={{display:"flex"}}>
      <img src={arrow} alt="not found" />
  
      <li style={{paddingTop:"2px"}}> Men's Wear For The Old</li></div>
    <div style={{display:"flex"}}>
      <img src={arrow} alt="not found"  />
  
      <li style={{paddingTop:"2px"}}>Women's Wear For The Old</li></div>
  </ul>
</div>

<a href="/" className="btn">Check it out</a>

</div>

<div className="col-12 col-sm-12 col-md-12 col-lg-4 whatWeOffercard ">

<div className="title">WIG STORE</div>

<div className="icon">
<img src={blackLogo} alt="not found"  style={{width:"100px",height:"80px"}}/>

</div>

<div className="features">
<h6 style={{color:"rgba(172, 86, 116,0.7)"}}>Here at <span style={{color:"rgb(172, 86, 116)"}}>CLAU"S FASHION </span>Wig Store we do..</h6>
 <center>
  <ul>
  <div style={{display:"flex"}}>
      <img src={arrow} alt="not found" />
  
      <li style={{paddingTop:"2px"}}>Wig Installation</li></div>
    <div style={{display:"flex"}}>
      <img src={arrow} alt="not found" />
  
      <li style={{paddingTop:"2px"}}>Wig Maintainance</li></div>
    <div style={{display:"flex"}}>
      <img src={arrow} alt="not found" />
  
      <li style={{paddingTop:"2px"}}>Selling Of Wig</li></div>
    
  </ul><br />
  <div >
  <div >
  <span style={{color:"red"}}>Read Me !!!</span><br />
<strong  style={{color:"lightgray"}}>This Wig installation and Maintainance serices are done at Clau's Fashion shop locate in Douala Bonaberi</strong><br />
    </div>
<button style={{width:"190px",height:"35px",background:"lightgray",color:"black",textTransform:"uppercase", fontSize:"meduim",fontWeight:"bold"}}>See shop location </button><br />
</div>
  </center>
 
</div>

{/* <br /><br /><br /><br /><br /> */}
<a href="#"className="btn" style={{marginTop:"20px"}}>Check it out</a>

</div>



</div>
</div>
        </div>
    )
}

export default WhatWeOffer;
