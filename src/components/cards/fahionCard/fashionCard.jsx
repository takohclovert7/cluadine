import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import logo from "../../../images/test.avif"
import { Swiper, SwiperSlide } from 'swiper/react';
import "./fashionCard.css"
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


function FashionCard(){
const clothes=[
    {  
        price:"6000",
       ageRange:"2-5",
       colors:["blue","green","red"],
       size:"m,xl"
    },
    {   
        price:"2000",
       ageRange:"5-10",
       colors:["black","green"],
       size:"m,xxl"
    },
    {    
        price:"16000",
       ageRange:"19-24",
       colors:["blue","yellow"]
       ,   size:"m"
    },
    { 
  
        price:"10000",
       ageRange:"65+",
       colors:["blue","purple"],
       size:"xl"
    }
]
    return(
        <div>
            
<Swiper className="container testimonials__container"
      modules={[Pagination, Navigation, Scrollbar, A11y]}
      spaceBetween={40}
      slidesPerView={1}
      pagination={{ clickable: true }}

      >
      {clothes.map(function(cloth,index1){
        return(
         
       <SwiperSlide  className="testimonial" key={index1}>
            <div className='swiperHeaader'>
                <h6 style={{textTransform:"uppercase",color:"rgb(113, 96, 169)",fontWeight:"bold",paddingTop:"4px",fontSize:"small"}}> cluas Fashion </h6>
                <div style={{display:"flex",justifyContent:"space-between"}}>
                <h6 style={{marginLeft:"20px",fontWeight:"bold"}}>   SIZES <br /><span style={{color:"gray",fontWeight:"normal"}}>{cloth.size}</span></h6>
                <h6 style={{marginRight:"6px"}}> Age  <span>{cloth.ageRange}</span></h6>
                </div>
              </div>
            <div className="product"  style={{background:"red"}}>
  <div       className="ribbon-wrapperF" >
    <div    className="ribbonNew">AVAIlABLE</div>
  </div>
  <img  src={logo} alt='logo not found' style={{height:"100%",width:"100%"}} />
</div>  

<div style={{display:"flex",justifyContent:"space-between",height:"29px"}}>
<p>name  hjfmgkj,gh</p>
<p id='price' style={{textTransform:"capitalize",fontSize:"bold"}}></p>
<h6 style={{fontWeight:"bold"}}><span id='amount' style={{color:"red"}}>{cloth.price}</span> XAF</h6>
</div>  
<div id='colorAndSeeMore' style={{display:"flex",justifyContent:"space-between",marginBottom:"7px"}}>
<div id='colors' style={{marginLeft:"10px"}}>
    <span style={{fontWeight:"bolder",marginRight:"3px",fontWeight:"bold"}}>COLORS</span>
    <div style={{display:"flex"}}>
{cloth.colors.map(function(color, index){
    return(
        <div key={index}     className='color rounded-circle' style={{background:color}}>
            {/* color div */}
        </div>     
    )
})}</div>

</div>
<div id="btnMoreLess" type="button" >
<span id="lblText" style={{marginRight:"1px"}}>see more</span>
        <i id="iMoreLess"    className="fa fa-chevron-circle-right"></i>

    </div>
</div>


           <div>
           <center>
  <button    className="ribbon">
   <strong className="ribbon-content">BUY NOW</strong>
</button>

</center>
           </div>

</SwiperSlide>
           )
        })}
  </Swiper>

        </div>
    )
}

export default FashionCard;