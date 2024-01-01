import React, { useContext } from "react";
import logo from "../assests/png/Frame 7.png";
import { Link } from "react-router-dom";
import NavBarContext from "../context/NavBarContext";

function DesktopNav() {

  const { memoizedIsFixed } = useContext(NavBarContext)

    return (
        <div className={`${memoizedIsFixed ? 'sticky' : 'fixed'} w-full h-[108px] header-padding header-border shadow-lg z-10 bg-white hidden md:flex transition-all`}>
           <div className="flex items-center w-full h-[60px] justify-between c-padding transition-all">
                <div className="w-[142.7px] h-[48px] gap-[120px]">
                  <Link to = "/home">
                    <img src={logo} alt="logo" width={logo.width} height={logo.height}/>
                  </Link>
                </div>       
                <div className="flex items-center w-[375px] h-[60px]">
                    <ul className="flex items-center justify-center gap-[24px]  w-[375px] h-[60px]">
                          <li className="w-[72px] h-[24px] gap-[32px]">
                            <Link to = "/about" className="text-[16px] leading-[24px] text-[#475467] font-semibold inter"> About us</Link>
                          </li>
                          <li className="w-[100px] h-[24px] gap-[32px]">
                            <Link to = "/services" className="text-[16px] leading-[24px] text-[#475467] font-semibold inter"
                            > Our Services </Link>
                          </li>
                          <button className="w-[155px] h-[60px] gap-[12px] rounded-[8px] border-[1px] bg-[#1F3AE3] btn-padding">
                            <Link to = "/"  className="text-[18px] leading-[28px] font-semibold inter text-white"> Let's Talk </Link>
                          </button>
                    </ul>     
                </div>
           </div>
        </div>
    )
}

export default DesktopNav;