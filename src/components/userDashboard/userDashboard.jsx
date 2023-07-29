import React, { useState } from 'react';
import "./userDasshboard.css"
import me from "../../images/download.jpg"; // Make sure to provide the correct path to the image
import menu from "../../images/icons8-circled-menu-50.png"
function UserDashBoard() {
    const [isActive, setIsActive] = useState(false);

    const handleNavbarToggle = () => {
      setIsActive((prevState) => !prevState);
    };
  
  return (

    <div>
  
    <button id="navbar-toggle" onClick={handleNavbarToggle}>
    <img src={menu}   style={{height:"100%",width:"100%"}} />
    </button>
    <nav id="navbar" className={isActive ? 'active' : ''}><br /><br />
    <ul class="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                  
                    <li >
                        <a href="#submenu1" data-bs-toggle="collapse" className="nav-link px-0  align-middle">
                            <i className="fs-4 bi-speedometer2"></i>STORE STOCK</a>
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <a href="#" className="nav-link px-0 py-0"> Fashion Wears</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0  py-0"> Make up style</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0  py-0"> wig designs</a>
                            </li>
                            <li>
                                <a href="#" className="nav-link px-0  py-0">Nails designs</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-table"></i> <span class="ms-1 d-none d-sm-inline">PLACE ORDER</span></a>
                    </li>
                    <li>
                        <a href="#submenu2" data-bs-toggle="collapse" class="nav-link px-0 align-middle ">
                            <i class="fs-4 bi-bootstrap"></i>ORDER HISTORY</a>
                        <ul class="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li class="w-100">
                                <a href="#" class="nav-link px-0"> Pending Orders</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> Delivered Orders</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#submenu3" data-bs-toggle="collapse" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-grid"></i> BOOK A SERVICE</a>
                            <ul class="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li class="w-50">
                                <a href="#" class="nav-link px-0"> Manicure</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0">Pedicure</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> Wig installation</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> Wig maintainace</a>
                            </li>
                            <li>
                                <a href="#" class="nav-link px-0"> A make up service</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" class="nav-link px-0 align-middle">
                            <i class="fs-4 bi-people"></i> WHAT WE OFFER </a>
                    </li>
                </ul>
                <hr />
                <div class="dropdown pb-4">
                    <a href="#" class="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src={me} alt="hugenerd" width="30" height="30" class="rounded-circle" />
                        <span class="d-none d-sm-inline mx-1">loser</span>
                    </a>
                    <ul class="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><a class="dropdown-item" href="#">service booked...</a></li>
                        <li><a class="dropdown-item" href="#">Settings</a></li>
                        <li><a class="dropdown-item" href="#">Profile</a></li>
                        <li>
                            <hr class="dropdown-divider" />
                        </li>
                        <li><a class="dropdown-item" href="#">Sign out</a></li>
                    </ul>
                </div>
    </nav><br /><br /><br />
    <div>iwHIFOBPUIDAFSGBFIVUDmjbjkbjkb jkb P</div>
  </div>




  );
}

export default UserDashBoard;
