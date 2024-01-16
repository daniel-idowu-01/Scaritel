import React from "react";
import twitter from "../../assests/png/twitter.png";
import linkedln from "../../assests/png/linkedln.png";
import web from "../../assests/png/browser.png";
import arrow from "../../assests/png/arrow.png";

const teams = [
    {
        id: 1,
        img: "",
        name: "Sam Ladipo",
        title: "Founder & CEO",
        info: "Former co-founder of Opendoor. Early staff at Spotiyf and Clearbit.",
        twitter: twitter,
        linkedln: linkedln,
        web: web
            
    },
    {
        id: 2,
        img: "",
        name: "Joseph Emmanuel",
        title: "Lead Designer",
        info: "Lead engineering teams at Figma, Pitch and Protocol Labs.",
        twitter: twitter,
        linkedln: linkedln,
        web: web
            
    },{
        id: 3,
        img: "",
        name: "Daniel Aikhomogbe",
        title: "Lead Marketimg Manager",
        info: "Lead engineering teams at Figma, Pitch and Protocol Labs.",
        twitter: twitter,
        linkedln: linkedln,
        web: web
            
    },
    {
        id: 1,
        img: "",
        name: "Ezekiel",
        title: "Frontend Engineer",
        info: "Lead engineering teams at Figma, Pitch and Protocol Labs.",
        twitter: twitter,
        linkedln: linkedln,
        web: web
            
    },{
        id: 1,
        img: "",
        name: "Ebenezer Noble",
        title: "Frontend Engineer",
        info: "Intern at Automagic Nigeria. Former frontend engineer at CodeClanNigeria.",
        twitter: twitter,
        linkedln: linkedln,
        web: web
            
    },{
        id: 1,
        img: "",
        name: "Sam Ladipo",
        title: "Founder & CEO",
        info: "Former co-founder of Opendoor. Early staff at Spotiyf and Clearbit.",
        twitter: twitter,
        linkedln: linkedln,
        web: web
            
    }
]

function Team () {
    return (
        <section className="flex flex-col items-center justify-center h-[1374px] about-padding gap-[64px]">
            <div className="flex flex-col items-center h-[94px] gap-[20px]">
                <h1 className="inter text-[36px] font-semibold leading-[44px] tracking-tight text-[#101828]">Meet our team</h1>
                <p className="inter text-[20px] font-normal leading-[30px] text-[#475467]">We actually are who we claim to be. Superstars in the making.</p>
            </div>
               <section className="grid grid-cols-3 gap-10">
                {teams.map((team) => {
                        const {id, name, title, info, twitter, linkedln, web} = team;
                        return (
                            <div className="h-[480px] w-[384px] bg-[#000000] relative " key={id}>
                                <div className="w-[336px] h-[232px] absolute top-[47%] left-[6%] px-5 py-6 bg-white bg-opacity-30 border border-white border-opacity-50 backdrop-blur-xl flex-col justify-start items-start gap-10 inline-flex">
                                        <div className="self-stretch h-32 flex-col justify-start items-start gap-2 flex">
                                            <div className="self-stretch justify-start items-start gap-4 inline-flex">
                                                <div className="grow shrink basis-0 text-white text-2xl font-bold font-['Inter'] leading-loose">{name}</div>
                                                <div className="pt-3 flex-col justify-start items-start inline-flex cursor-pointer">
                                                    <img src={arrow} alt="arrow" />
                                                </div>
                                            </div>
                                            <div className="self-stretch h-20 flex-col justify-start items-start gap-1 flex">
                                                <div className="self-stretch text-white text-lg font-semibold font-['Inter'] leading-7">{title}</div>
                                                <div className="self-stretch text-white text-base font-normal font-['Inter'] leading-normal">{info}</div>
                                            </div>
                                        </div>
                                        <div className="self-stretch justify-start items-center gap-5 inline-flex cursor-pointer">
                                           <img src={twitter} alt="twitter" />
                                           <img src={linkedln} alt="linkedln" />
                                           <img src={web} alt="web" />
                                        </div>
                                </div>
                            </div>
                        )
                    })}
               </section>
        </section>
    )
}

export default Team;