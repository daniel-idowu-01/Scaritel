import React from "react";
import logo from "../assests/png/Frame 7.png";
import NavIcon from '../assests/logos/mobile-nav.png'
import { Link } from "react-router-dom";

function MobileNav () {
    return (
        <div className="fixed w-full shadow-lg z-10 bg-white md:hidden">
           <div className="flex items-center w-full justify-between h-[80px] px-7">
                <Link to = "/home">
                    <img src={logo} className="w-[35%]" alt="logo" />
                </Link>
                <div className="flex items-center">
                    <img src={NavIcon} alt="" className="w-32" />
                </div>
           </div>
        </div>
    )
}

export default MobileNav;