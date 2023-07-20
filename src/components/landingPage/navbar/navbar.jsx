import me from "../../../images/whiteLogo.png"
import me1 from "../../../images//backgroundLogo.png"
import "./navbar.css"
import { Carousel} from 'react-bootstrap'
function Navbar(){

    return(
        <div>

<div  id="landingPageHeader">
  <br />
<div class="navbar-wrapper"  >

<nav class="navbar navbar-expand-lg navbar-light" >
<div class="container-fluid"  style={{marginBottom:"16px"}}>
<div class="navbar-brand" id="imgDiv" >
        <h4> CLAU'S FASHION</h4>
          <div>
            <img src={me} alt="junior"  /> 
          </div> 
        </div>
  <button class="navbar-toggler" type="button"  style={{marginRight:"8px"}} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>


  <div class="collapse navbar-collapse" id="navbarNav" style={{textAlign:"right",background:"white",paddingRight:"30px"}}>
    <ul class="navbar-nav mr-auto">
      <li class="nav-item">
        <a class="nav-link" href="/" >Home</a>
      </li>
      <li class="nav-item">
             <a class="nav-link" href="#">Contact</a>
           </li>
           <li class="nav-item">
             <a class="nav-link" href="#">Help</a>
           </li>
          
           <li class="nav-item">
             <a class="nav-link" href="#">What we offer</a>
           </li>
         <li class="nav-item ">
             <a class="nav-link" href="/user/login">Login</a>
           </li>
           <li class="nav-item ">
             <a class="nav-link" href="/user/signup">Sign up</a>
           </li>
    </ul>
        <form class="form-inline my-2 my-lg-0 d-inline d-xs-none">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
  </div>
  </div>
</nav>
</div>

        </div>

      <Carousel interval={1500} controls={false} indicators={false}>
      <Carousel.Item>
        <p className="carousel-content">First slide content</p>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <p className="carousel-content">Second slide content</p>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <p className="carousel-content">Third slide content</p>
        <Carousel.Caption>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel> 
        </div>
    )
}

export default Navbar;