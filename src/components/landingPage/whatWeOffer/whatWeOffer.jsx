import Makeup from "./makeup/makeupCard"
import Navbar from "../navbar/navbar";
import "./whatWeOffer.css"
function WhatWeOffer(){

    return(
        <div>

<Navbar />

  <div className="containerOffer">
    <h4>SERVICES OFFER BY <span>CLAU'S FASHION</span></h4>
  <div class="row">
    <div className=" col-6 col-sm-12 col-md-6 col-lg-6 ">
    < Makeup  />
    </div>
    <div className=" col-6  col-sm-12 col-md-6 col-lg-6 ">
    {/* < Makeup  /> */}
    </div>

  </div>
</div>
        </div>
    )
}

export default WhatWeOffer;
