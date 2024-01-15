import React from "react";
import deliver from "../../assests/icons/deliver.png";
import discover from "../../assests/icons/discover.png";
import project from "../../assests/icons/project.png";




function Discovery () {

    const infos = [
        {
            logo: discover,
            title: "Discovery Call",
            text: "We start our procedure with a comprehensive consultation to understand your objectives, preferences, and particular requirements. We also explore the project scope, schedule and check for any obstacles."
        },
        {
            logo: project,
            title: "Project Kick-off",
            text: "We make sure your project is well-planned, assemble a knowledgeable team specifically for your project, and start the design and development phase with frequent progress reports."
        },
        {
            logo: deliver,
            title: "Professional Delivery",
            text: "We execute thorough testing and quality control, complete the project on schedule and within budget, and offer post-launch assistance to guarantee a smooth transition."
        }
    ]

    return (
        <section className="h-[418px] gap-[64px] about-padding bg-[#F9FAFB]">
            <div className="h-[226px] abt-padding">
                <div className="h-[226px gap-[32px] flex items-center justify-center">
                 {infos.map((info, id) => {
                    const {text, title, logo} = info;
                    return (
                        <div className="gap-[20px] flex flex-col justify-center items-center" key={id}>
                            <img src={logo} alt="discover" />
                            <div className="h-[158px] w-[384px] gap-[8px] flex flex-col justify-center items-center">
                                <h1 className="inter h-[30px] font-semibold leading-[30px] text-[20px] text-center">{title}</h1>
                                <p className="inter h-[120px] font-normal text-[16px] leading-[24px] text-center text-[#475467]">{text}</p>
                            </div>
                        </div>
                    )
                 })}
                </div>
            </div>
        </section>
    )

}


export default Discovery;