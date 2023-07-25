import Navbar from "../navbar/navbar";
import FashionCard from "../../cards/fahionCard/fashionCard";
import WigCard from "../../cards/wigCard/wigCard";
import nail from "../../../images/nails.avif"
import Makeup from "../../cards/nailCard/makeupCard";
import make from "../../../images/makeup.jpg"
function Home(){

    return(
        <div>
   <div  id="homeHeader">
    
    <Navbar />
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
  < FashionCard/>
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