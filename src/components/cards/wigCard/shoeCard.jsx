
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
import ShoeImage from "../../../images/shoe.jpg"

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


const Shoe= () => {

  const [isFlipped, setIsFlipped] = useState(false);

  const handleFlip = () => {
    setIsFlipped(!isFlipped);
    console.log("click me")
  };
  const [selectedSizeIndex, setSelectedSizeIndex] = useState(null);

  const handleSizeClick = (index) => {
    setSelectedSizeIndex(index);
  };

const shoes=[
  {
    name:"shoe name",
    price:"12000",
    colors:["red","blue","black","pink"],
    shoeSizes:[41,30,38,40]
  },
  {
    name:"shoe name",
    price:"6000",
    colors:["purple","green","black"],
    shoeSizes:[41,39,43,45]
  },
  {
    name:"shoe name",
    price:"19000",
    colors:["red","brown","yellow"],
    shoeSizes:[38,35,37,41]
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
  
{shoes.map(function(shoe,shoeIndex){
  return(
  <SwiperSlide key={shoeIndex} className="testimonialWig">
  
  <CardContainer className="wigDiv">
      <Card className="wigCard"   style={{ transform: isFlipped ? 'rotateY(180deg)' : 'none' }}>
        <Front className="cardFront">
          <h4 style={{textTransform:"uppercase",color:"rgb(113, 96, 169)",fontWeight:"bold",paddingTop:"4px",fontSize:"small"}}>Clau's Fashion</h4>

  <div    className="wigImage" style={{height:"213px"}}>
  <div       className="ribbon-wrapperF" style={{marginTop:"30px"}}>
    <div    className="ribbonNew">AVAIlABLE</div>
  </div>
<img  src={ShoeImage} alt='logo not found' style={{height:"100%",width:"100%"}} />

</div>
<div style={{display:"flex",justifyContent:"space-between",height:"29px"}}>
<p>name  hjfmgkj,gh</p>
<p id='price' style={{textTransform:"capitalize",fontSize:"bold"}}></p>
<h6 style={{fontWeight:"bold",marginRight:"15px"}}><span id='amount' style={{color:"red"}}>{shoe.price}</span> XAF</h6>
</div>  
 <div id='colorAndSeeMore' style={{display:"flex",justifyContent:"space-between",marginBottom:"7px"}}>
<div id='colors' style={{marginLeft:"10px"}}>
    <span style={{fontWeight:"bolder",marginRight:"3px"}}>COLORS</span>
    <div style={{display:"flex"}}>
{shoe.colors.map(function(color,colorsIndex){
  return(
          <div  key={colorsIndex}  className='color rounded-circle' style={{background:color}}>
            {/* color div */}
        </div>    
          )
        })} 
</div>

</div>
<div id="btnMoreLess" type="button" style={{marginRight:"5px"}} onClick={handleFlip}>
<span id="lblText" style={{marginRight:"1px"}}>see shoe<br />other colors</span>
        <i id="iMoreLess"    className="fa fa-chevron-circle-right"></i>

    </div>
</div>
<div className="shoe-sizes" style={{marginBottom:"6px"}}>
            <span style={{fontWeight:"bold"}}>Select size:</span><br />
            {shoe.shoeSizes.map((size,index) => (
              <button key={size} 

              onClick={() => handleSizeClick(index)}
              style={{
                backgroundColor: selectedSizeIndex === index ? "red" : "transparent",
                color: selectedSizeIndex === index ? "#fff" : "#000",
                border: "1px solid #000",
                padding: "5px",
                // margin: "5px",
                cursor: "pointer",
              }}
              >
             {size}
              </button>
            ))}
          </div>
<div class="frame">
  <button class="custom-btn" style={{background:"grey"}}>BUY NOW</button>
  </div>
          {/* <button onClick={handleFlip}>Flip</button> */}
        </Front>
        <Back>
          <h4>{shoe.name}</h4>

          <Carousel >
            {shoe.colors.map(function(col,colIndex){
              return(
      <Carousel.Item key={colIndex}>
<img src={ShoeImage} alt="not found" style={{width:"100%",height:"300px"}} />
  <p className="carousel-content"><span>{col} color</span> of {shoe.name}</p>
      
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

export default Shoe;


 

