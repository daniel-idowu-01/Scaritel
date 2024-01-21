import { React, useState } from "react";
import wrap from "../assests/icons/wrap.png";
import { CiCirclePlus } from "react-icons/ci";



function SingleQuestion ({ text, info }) {

    const [show, setShow] = useState(false);
    return (
        <div className="py-8">
            <details
            className="group w-[720px]">
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span className="text-[#101828] text-[18px] leading-[28px] font-semibold font-['Inter']"> {text} </span>
                    <span className="transition ease-in-out delay-200"  onClick={() => setShow(!show)}>
                        {show ? (<img src={wrap} alt="wrap"/>) : (<CiCirclePlus className="w-7 h-7 text-[#98A2B3]"/>)}
                    </span>
                </summary>
                {show ? (<p className="group-open:animate-fadeIn mt-3 text-[16px] font-normal leading-[24px] font-['Inter'] text-[#475467] w-[720px] flex justify-start items-start text-start">   
                {info} 
                </p>) : null}
            </details>
      </div>
    )
}


export default SingleQuestion;