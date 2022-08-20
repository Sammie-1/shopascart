import React from "react";
import "./NavBar.css"
import logo from "../images/svgexport-1.svg"
const NavBar = () => {
    return (  
        <>
         <nav className="header-nav sticky-top">
            <img src={logo} alt="" className="logo-nav"/>
            <ul className="ul-nav">
               <li className="li-nav">Stores</li>
               <li className="li-nav">Locations</li>
               <li className="active">Become a Shopper</li>
            </ul>
            <div className="sign-nav">
                <div className="sign-in-nav">Sign in</div>
                <div className="sign-up-nav">Sign up</div>
            </div>
         </nav>
        </>
    );
}
 
export default NavBar;