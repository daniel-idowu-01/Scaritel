import React from "react";
import hand from "../assests/png/hand.png";


function About () {
    return (
        <div className="inter relative top-[80px] h-[348px]" >
            <div className="overflow-x-hidden">
                <section className="about-padding bg-[#F9FAFB] gap-[64px]">
                        <div className="h-[156px] gap-[40px]">
                        <div className="h-[156px] gap-[24px] flex flex-col items-center justify-center">
                            <h1 className="font-semibold text-[16px] leading-[24px] text-center text-[#6941C6] ">About us</h1>
                            <p className="font-semibold text-[45px] leading-[60px] text-center tracking-[-2%] w-[960px]">With our professional IT services, we help you grow your business.</p>
                        </div>
                        </div>
                    </section>
                
                    <section className="h-[784px] about-padding gap-[64px] mx-[150px]">
                        <div className="h-[592px] w-[1280px] gap-[64px] flex items-center justify-center">
                            <div className="w-[640px] h-[540px] gap-[40px] flex flex-col">
                                <p className="font-semibold text-[30px] text-[#101828] leading-[38px] h-[114px] w-[640px] gap-[12px]">We modernize and grow businesses by crafting IT solutions that companies, their employees, and their customers love.</p>
                                <p className="h-[308px] w-[640px] font-normal text-[18px] leading=[28px] text-[#475467]">At Scaritel, we are proud to have a group of highly qualified experts with a wide range of market expertise from around the world. We have experience in many different fields, such as digital marketing, artificial intelligence, software engineering, product design and development, and more. <br/> <br/>
                                We offer creative solutions to a broad spectrum of people and organizations, such as corporate businesses, freelancers, organizations, and entrepreneurs. Our goal is to support the development of concepts and abilities into successful company ventures that are built on the foundation of creativity and innovative partnership solutions.
                                </p>
                                <button className="uppercase h-[48px] w-[130px] gap-[12px] border-[1px] rounded-[8px] bt-padding font-semibold text-[16px] leading-[24px] text-[#344054]">Let's talk</button>
                            </div>
                            <img src={hand} alt="hand" height={hand.height} width={hand.width} />
                        </div>
                    </section>
            </div>
        </div>
    )
}

export default About;