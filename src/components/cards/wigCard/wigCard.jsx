
import { useState } from "react";
import "./wigCard.css"
import { Carousel} from 'react-bootstrap'
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react'; 
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import WigImage from "../../../images/download.jpg"

import styled from 'styled-components';

const CardContainer = styled.div`
width: 280px;
height: 450px;
  perspective: 1000px;
`;

const Card = styled.div`
  width: 100%;
  height: 100%;
  transition: transform 0.6s;
  transform-style: preserve-3d;
`;

const Front = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
`;

const Back = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(180deg);
`;


function WigCard(){

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    console.log("click me")
  };


const wigs=[
  {
    name:"wig name",
    price:"12000",
    colors:["red","blue","black","pink"],
  },
  {
    name:"wig name",
    price:"6000",
    colors:["purple","green","black"],
  },
  {
    name:"wig name",
    price:"19000",
    colors:["red","brown","yellow"],
  }
]


 
    return(
        <div>


<Swiper className="containerWig testimonials__containerWig"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}
      >
  
{wigs.map(function(wig,wigIndex){
  return(
  <SwiperSlide key={wigIndex} className="testimonialWig">
  
  <CardContainer className="wigDiv">
      <Card className="wigCard"   style={{ transform: isFlipped ? 'rotateY(180deg)' : 'none' }}>
        <Front className="cardFront">
          <h4 style={{textTransform:"uppercase",color:"rgb(113, 96, 169)",fontWeight:"bold",paddingTop:"4px",fontSize:"small"}}>Clau's Fashion</h4>

  <div    className="wigImage">
  <div       className="ribbon-wrapperF" style={{marginTop:"30px"}}>
    <div    className="ribbonNew">AVAIlABLE</div>
  </div>
<img  src={WigImage} alt='logo not found' style={{height:"100%",width:"100%"}} />

</div>
 
 <div id='colorAndSeeMore' style={{display:"flex",justifyContent:"space-between",marginBottom:"7px"}}>
<div id='colors' style={{marginLeft:"10px"}}>
    <span style={{fontWeight:"bolder",marginRight:"3px"}}>COLORS</span>
    <div style={{display:"flex"}}>
{wig.colors.map(function(color,colorsIndex){
  return(
          <div  key={colorsIndex}  className='color rounded-circle' style={{background:color}}>
            {/* color div */}
        </div>    
          )
        })} 
</div>

</div>
<div id="btnMoreLess" type="button" style={{marginRight:"5px"}} onClick={handleFlip}>
<span id="lblText" style={{marginRight:"1px"}}>see wig<br />other colors</span>
        <i id="iMoreLess"    className="fa fa-chevron-circle-right"></i>

    </div>
</div>
<h4><span style={{color:"red"}}>{wig.price}  </span>XAF</h4>

<div class="frame">
  <button class="custom-btn">BUY NOW</button>
  </div>
          {/* <button onClick={handleFlip}>Flip</button> */}
        </Front>
        <Back>
          <h4>{wig.name}</h4>

          <Carousel >
            {wig.colors.map(function(col,colIndex){
              return(
      <Carousel.Item key={colIndex}>
<img src={WigImage} alt="not found" style={{width:"100%",height:"300px"}} />
  <p className="carousel-content"><span>{col} color</span> of {wig.name}</p>
      
        <br />
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
          )
        })}
    
    </Carousel> 

          <div onClick={handleFlip}><i className="fa fa-undo"></i> Back</div>
        </Back>
      </Card>
    </CardContainer>
  
          
            </SwiperSlide>
  )
})}

            
   
      </Swiper>




      </div>
    )
}

export default WigCard;


 

