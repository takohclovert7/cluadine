import "./makeupCard.css"
import logo from "../../../../images/whiteLogo.png"
function Makeup(){

    return(
        <div>


<div className="center">

  <div className="card">
    <div className="junior">
    <div className="additional">
      <div className="user-card">
        <div className="level center">
         MAKE UP
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
        {/* <div className="coords">
          <span>Position/Role</span>
          <span>City, Country</span>
        </div>
        <div className="stats">
          <div>
            <div className="title">Awards</div>
            <i className="fa fa-trophy"></i>
            <div className="value">2</div>
          </div>
          <div>
            <div className="title">Matches</div>
            <i className="fa fa-gamepad"></i>
            <div className="value">27</div>
          </div>
          <div>
            <div className="title">Pals</div>
            <i className="fa fa-group"></i>
            <div className="value">123</div>
          </div>
          <div>
            <div className="title">Coffee</div>
            <i className="fa fa-coffee"></i>
            <div className="value infinity">∞</div>
          </div> */}
        {/* </div> */}
      </div>
    </div></div>
    <div className="general">
        <center >
        <h6>MAKE UP STYLE</h6>
    <div className="container">
      <p  style={{marginLeft:"80px",textTransform:"capitalize",color:"blue"}}> Here at clau's fashion make up talent we do </p>
    <ul >
      <li><i className="fas fa-circle mr-2"></i> Item 1</li>
      <li><i className="fas fa-circle mr-2"></i> Item 2</li>
      <li ><i className="fas fa-circle mr-2"></i> Item 3</li>
       <li><i className="fas fa-circle mr-2"></i> Item 2</li>

    </ul>
  </div>
 
        </center>
  
 

<div id="bookedmakeupDate" style={{marginLeft:"50px"}}>
{/* <br /> */}
  <div className="ribbon-wrapper1" ><div class="glow">&nbsp;</div>
    <button className="ribbon-front" >
    Book a make up date
    </button>
    <div className="ribbon-edge-topleft"></div>
    <div className="ribbon-edge-topright"></div>
    <div className="ribbon-edge-bottomleft"></div>
    <div className="ribbon-edge-bottomright"></div>
  </div>
  </div>


    </div> 
  </div>

</div>


        </div>
    )
}

export default Makeup;