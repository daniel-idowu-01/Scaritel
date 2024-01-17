import {React} from "react";
import rec from "../assests/png/rec.png";
import content1 from "../assests/png/Content2.png";
import content2 from "../assests/png/Content1.png";
import content3 from "../assests/png/Content3.png";
import check from "../assests/png/check.png";
import SingleQuestion from "./SingleQuestion";



const design1 = [
    {
        info: "User-centric interface"
    },
    {
        info: "Designing seamless experiences"
    },
    {
        info: "Creative UI/UX/Design Solutions"
    }
]
const design2 = [
    {
        info: "Strategic digital campaigns"
    },
    {
        info: "Driving digital presence"
    },
    {
        info: "Results-driven marketing"
    }
]
const design3 = [
    {
        info: "Creating beautiful websites"
    },
    {
        info: "User-centric design solutions"
    },
    {
        info: "Elevate your online presence"
    }
]

const questions = [
    {
        text: " What IT services do you offer?",
        info: "We provide a comprehensive range of IT solutions, including web development, mobile app development, UI/UX design, digital marketing, IT consulting etc"
    },
    {
        text: "What sets your UI/UX design process apart?",
        info: "Our UI/UX design process is user-centric, focusing on intuitive interfaces and seamless experiences. We conduct extensive user testing to refine designs and meet user expectations."
    },
    {
        text: "What is the typical timeline for a web development project?",
        info: "Project timelines vary based on complexity. We provide detailed timelines during the consultation phase, ensuring transparency and alignment with your expectations."
    },
    {
        text: "What is your pricing structure for IT services?",
        info: "Our pricing is tailored based on the scope and complexity of each project. During the consultation, we provide a detailed breakdown of costs, ensuring transparency and alignment with your budget."
    },
    {
        text: "What technologies do you specialize in for web development?",
        info: "We are proficient in a wide range of technologies, including but not limited to HTML5, CSS3, JavaScript, React, Angular, Node.js, Python, PHP, and various CMS platforms."
    }
]
function Services () {
    return (
        <section className="relative top-[100px]">
            <div className="h-[253px] relative flex flex-col items-center justify-center">
                <img src={rec} height={rec.height} width={rec.width} alt="rec" />
                <div className="absolute bottom-[90px] h-[68px] px-10 py-3 bg-black bg-opacity-40 rounded-[40px] justify-center items-center gap-2.5 inline-flex">
                  <div className="text-white text-4xl font-bold font-['Inter'] leading-[44px]">OUR SERVICES</div>
                </div>
            </div>
            <section className="h-[3342px] ">
                <div className="h-[1856px] services-padding gap-[64px]">
                    <div className="h-[512px] gap-[96px] flex items-center justify-center">
                        <div className="w-[600px] h-[408px] gap-[32px]">
                           <div className="h-[172px] gap-[24px] flex flex-col items-start justify-start">
                                <h1 className="font-['inter'] font-semibold text-[36px] leading-[44px] tracking-wide">UI/UX Design</h1>
                                <p className="font-['inter'] font-normal text-[18px] leading-[28px] text-[#475476]">As a UX/UI Design Company, our team looks for creative solutions and designs the optimal user experience while keeping context usage in mind. we give your product an interactive design, perspective interface, animation, graphics, and visual features.</p>
                                <div className="h-[124px] gap-[20px] service-padding flex flex-col items-start justify-start">
                                    {
                                        design1.map((item, index) => {
                                            const {info} = item;
                                            return (
                                                <div className="inline-flex items-start justify-start space-x-4" key={index}>
                                                    <img src={check} alt="check" />
                                                    <p className="font-['inter'] font-normal text-[18px] leading-[28px] text-[#475476]">{info}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                           <button className="uppercase h-[48px] w-[130px] gap-[12px] border-[1px] rounded-[8px] bt-padding font-semibold text-[16px] leading-[24px] text-[#344054]">Let's talk</button>
                           </div>
                        </div>
                        <img src={content1} alt="content1" height={content1.height} width={content1.width} />
                    </div>
                    <div className="h-[512px] gap-[96px] flex items-center justify-center mt-10">
                        <div className="w-[600px] h-[408px] gap-[32px] order-2">
                           <div className="h-[172px] gap-[24px] flex flex-col items-start justify-start">
                                <h1 className="font-['inter'] font-semibold text-[36px] leading-[44px] tracking-wide">Digital Marketing</h1>
                                <p className="font-['inter'] font-normal text-[18px] leading-[28px] text-[#475476]">Grow Your Business With Digital Marketing. We can assist you in creating and implementing digital marketing strategies that draw in new clients, interact with existing ones, and produce leads to drive business growth.</p>
                                <div className="h-[124px] gap-[20px] service-padding flex flex-col items-start justify-start">
                                    {
                                        design2.map((item, index) => {
                                            const {info} = item;
                                            return (
                                                <div className="inline-flex items-start justify-start space-x-4" key={index}>
                                                    <img src={check} alt="check" />
                                                    <p className="font-['inter'] font-normal text-[18px] leading-[28px] text-[#475476]">{info}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                           <button className="uppercase h-[48px] w-[130px] gap-[12px] border-[1px] rounded-[8px] bt-padding font-semibold text-[16px] leading-[24px] text-[#344054]">Let's talk</button>
                           </div>
                        </div>
                        <img src={content2} alt="content1" height={content2.height} width={content2.width} className="order-1"/>
                    </div>
                    <div className="h-[512px] gap-[96px] flex items-center justify-center mt-10">
                        <div className="w-[600px] h-[408px] gap-[32px]">
                           <div className="h-[172px] gap-[24px] flex flex-col items-start justify-start">
                                <h1 className="font-['inter'] font-semibold text-[36px] leading-[44px] tracking-wide">Digital Marketing</h1>
                                <p className="font-['inter'] font-normal text-[18px] leading-[28px] text-[#475476]">Grow Your Business With Digital Marketing. We can assist you in creating and implementing digital marketing strategies that draw in new clients, interact with existing ones, and produce leads to drive business growth.</p>
                                <div className="h-[124px] gap-[20px] service-padding flex flex-col items-start justify-start">
                                    {
                                        design3.map((item, index) => {
                                            const {info} = item;
                                            return (
                                                <div className="inline-flex items-start justify-start space-x-4" key={index}>
                                                    <img src={check} alt="check" />
                                                    <p className="font-['inter'] font-normal text-[18px] leading-[28px] text-[#475476]">{info}</p>
                                                </div>
                                            )
                                        })
                                    }
                                </div>
                           <button className="uppercase h-[48px] w-[130px] gap-[12px] border-[1px] rounded-[8px] bt-padding font-semibold text-[16px] leading-[24px] text-[#344054]">Let's talk</button>
                           </div>
                        </div>
                        <img src={content3} alt="content1" height={content3.height} width={content3.width}/>
                    </div>
                </div>
                <div className="h-[1486px] gap-[64px] bg-[#FCFCFD] freq-padding flex flex-col text-center">
                    <div className="h-[60px] abt-padding gap-[32px]">
                        <p className="gap-[48px] font-bold text-[48px] leading-[60px] tracking-wide font-['Inter']">Frequently asked questions</p>
                    </div>
                    <div className=" h-[864px] px-8 flex-col justify-start items-center gap-16 inline-flex">
                        <div className="h-[864px] flex-col justify-start items-start gap-8 flex">
                            <div className="self-stretch h-[84px] flex-col justify-start items-center flex">
                                    {questions.map((question, index) => {
                                        return <SingleQuestion key={index} {...question}/>
                                    })}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    )
}

export default Services;