import Navbar from "../navbar/navbar";
import FashionCard from "../../cards/fahionCard/fashionCard";
function Home(){

    return(
        <div>
   <div  id="homeHeader">
    
    <Navbar />
    <div>
 
    <div className="containerH">
  <div class="row">
    <div className="col-sm-12 col-md-6 col-lg-4 ">
    < FashionCard/>
    </div>
    <div className="col-md-6 col-lg-4 d-none  d-sm-none d-md-block d-lg-block">
    < FashionCard/>
    </div>
    <div className="col-lg-4 d-none d-sm-none d-md-none d-lg-block">
    < FashionCard/>
    </div>
  </div>
</div>



  
    </div>
  
    </div>
        </div>
    )
}

export default Home;