import React from "react";
import img1 from "../assests/png/Avatar2.png";
import img2 from "../assests/png/Avatar3.png";
import img3 from "../assests/png/Avatar4.png";


function Info () {
    return (
        <div className="flex flex-col items-center justify-center h-[290px] w-[1216px] gap-[32px] p-[32px] bg-[#F9FAFB] rounded-[16px]">
            <div className="relative flex justify-center items-center">
                <img src={img1} width={img1.width} height={img1.height} alt="img1" className="absolute left-[40px]"/>
                <img src={img2} width={img2.width} height={img2.height} alt="img2" className="z-50 relative top-[-10px]"/>
                <img src={img3} width={img3.width} height={img3.height} alt="img3" className="absolute right-[40px]"/>
            </div>
            <div className="w-[768px] gap-[8px]">
                <p className="font-semibold font-['Inter'] text-[20px] leading-[30px] text-[#101828] text-center">Still want to know more about our services?</p>
                <p className="font-normal text-[18px] leading-[28px] font-['Inter'] text-[#475467] text-center">Let's have a chat here</p>
            </div>
            <button className="rounded-[8px] bg-[#1F3AE3] text-[#fff] w-[117px] h-[40px] font-['Inter']">Chat with us</button>
        </div>
    )
}


export default Info;