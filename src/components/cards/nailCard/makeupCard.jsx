import "./makeupCard.css"
import logo from "../../../images/whiteLogo.png"
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { useState } from "react";
import { Col } from "react-bootstrap";
function Makeup(props){
  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
  };
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
             
             
<div className={`flip-card ${isFlipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        <div className="flip-card-front">
          <div style={{display:"flex"}} className="shop">
          <h6 style={{textTransform:"uppercase",color:"rgb(113, 96, 169)",fontWeight:"bold",paddingTop:"4px",fontSize:"small"}}> cluas Fashion </h6>
          <button className="shopLoactioBtn"   onClick={handleFlip} >Shop Loaction</button>
          </div>
     <div className="image-div" >
     <div       className="ribbon-wrapperF" style={{marginTop:"35px"}}>
    <div    className="ribbonNew">AVAIlABLE</div>
  </div>
<img src={props.image} alt="not found"  style={{width:"100%",height:"100%"}} />
     </div>
<h6 style={{fontWeight:"bold",fontSize:"x-large",marginTop:"15px"}}><span style={{color:"red"}}>{price.price}  </span>XAF</h6>
     <button className="buyBtnFront" style={{
      width:"250px",
      height:"40px",
      background:"black",
      color:"white",
      fontSize:"meduim",
     fontWeight:"bold",
     marginTop:"15px"
     }}>{props.btnText}</button>
     <p  style={{
      fontSize:"small",
      color:"grey",
      fontWeight:"bold",
   marginTop:"35px"
     }}>Click the shop loaction found at the top right corner to see shop physical location</p>
        </div>
        <div className="flip-card-back">
          <h2>shop location</h2>
          <button onClick={handleFlip}>Back</button>
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