import me from "../../../images/whiteLogo.png"
import me1 from "../../../images//backgroundLogo.png"
import "./navbar.css"
import { Carousel} from 'react-bootstrap'
function Navbar(){

    return(
        <div>

<div  id="landingPageHeader">
  <br />
<div className="navbar-wrapper"  >

<nav className="navbar navbar-expand-lg navbar-light" >
<div className="container-fluid"  style={{marginBottom:"16px"}}>
<div className="navbar-brand" id="imgDiv" >
        <h4> CLAU'S FASHION</h4>
          <div>
            <img src={me} alt="junior"  /> 
          </div> 
        </div>
  <button className="navbar-toggler" type="button"  style={{marginRight:"8px"}} data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>


  <div className="collapse navbar-collapse" id="navbarNav" style={{textAlign:"right",background:"white",paddingRight:"30px"}}>
    <ul className="navbar-nav mr-auto">
      <li className="nav-item">
        <a className="nav-link" href="/" >Home</a>
      </li>
      <li className="nav-item">
             <a className="nav-link" href="#">Contact</a>
           </li>
           <li className="nav-item">
             <a className="nav-link" href="#">Help</a>
           </li>
          
           <li className="nav-item">
             <a className="nav-link" href="/user/offers">What we offer</a>
           </li>
         <li className="nav-item ">
             <a className="nav-link" href="/user/login">Login</a>
           </li>
           <li className="nav-item ">
             <a className="nav-link" href="/user/signup">Sign up</a>
           </li>
    </ul>
        <form className="form-inline my-2 my-lg-0 d-inline d-xs-none">
          <input
            className="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
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