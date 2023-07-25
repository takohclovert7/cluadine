import "./makeupCard.css"
import logo from "../../../images/whiteLogo.png"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
function Makeup(props){
const prices=[
  {
    price:"6000"
  }
  ,  {
    price:"26000"
  }
  ,  {
    price:"16000"
  }
  ,  {
    price:"46000"
  }
]
    return(
        <div>

<Swiper className="containerNail testimonials__containerNail"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
    {prices.map(function(price,priceIndex){
      return(

      <SwiperSlide className="testimonialNail">
             
             

<div className="center">

<div className="card">
  <div className="junior">
  <div className="additional">
    <div className="user-card">
      <div className="level center">
       {props.text}
      </div><center>
      <div className="logo rounded-circle">
    <img src={logo} alt="not found" style={{width:"90%",height:"90%"}} />
      </div></center>
      <div className="points center">
      CLAU'S FASHION
      </div>
            </div>
    <div className="more-info">
      <h6>shop physical location</h6>
      <div className="coords">
        
      </div>
      
    </div>
  </div></div>
  <div className="general">
      <center >
      <h6>MAKE UP STYLE</h6>
  <div className="container">
 <div style={{width:"100%",height:"250px",marginLeft:"40px",marginRight:"10px"}}>
  <img src={props.image} alt="not found" style={{width:"100%",height:"100%"}} />
 </div>

 
</div><br />

      </center>
<div id="bookedmakeupDate" style={{marginLeft:"50px",marginTop:"10px"}}>
  <center>
  <h4 style={{marginBottom:"17px",fontWeight:"bold"}}><span style={{color:"red"}}>{price.price}  </span>XAF</h4>
  </center>

<div className="ribbon-wrapper1" ><div class="glow">&nbsp;</div>
  <button className="ribbon-front" >
{props.btnText}
  </button>
  <div className="ribbon-edge-topleft"></div>
  <div className="ribbon-edge-topright"></div>
  <div className="ribbon-edge-bottomleft"></div>
  <div className="ribbon-edge-bottomright"></div>
  <h6 style={{fontSize:"small",color:"gray",fontWeight:"bold",marginLeft:"40px",marginTop:"10px"}}>Click logo on the left side to see shop physical location</h6>
</div>

</div>


  </div> 
</div>

</div>


                 </SwiperSlide>
             )
            })}
                  
     
      </Swiper>



        </div>
    )
}

export default Makeup;