import React from "react";
import Logo from "../../logo/Pear-2015072853.svg";
import ProfilePIc from "../../logo/CR-7.jpg"
import "./Header.css";

const Header = () => {
  return (
    <nav className="header_nav">
      <div className="container-fluid h-100 px-5 d-flex align-items-center justify-content-between relative">
        <a href="/">
          <div className="nav_brand">
            <img
                className="w-100 h-100"
                src={Logo}
                alt="logo"
              />
          </div>
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item admin-nav">
            <button className="btn "><strong style={{color:"white"}}>My Profile</strong></button>
            <div className="custom_dropdown">
              <ul className="navbar-nav">
                <li className="nav-item"><img className= "img-fluid mb-5" src={ProfilePIc} alt="Profile" /></li>
                <li className="nav-item"><h5><strong style= {{color:"#1888d5"}}>Pedro Domingos</strong></h5></li>
                <li className="nav-item"><p>I am Happy to do <br /> Eduwo Taks</p></li>
              </ul>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
