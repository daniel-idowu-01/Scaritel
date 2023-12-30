import React from "react";
import logo from "../assests/png/Frame 7.png";
import { Link } from "react-router-dom";

function MobileNav () {
    return (
        <div className="fixed w-full shadow-lg z-10 bg-white md:hidden">
           <div className="flex items-center w-full justify-between h-[60px]">
                <Link to = "/home">
                    <img src={logo} className="w-1/4" alt="logo" />
                </Link>
                <div className="flex items-center">
                    xx
                </div>
           </div>
        </div>
    )
}

export default MobileNav;