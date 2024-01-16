import React, { useEffect, useState } from "react";
import person from "../../assests/png/Avatar.png";
import stars from "../../assests/png/Stars.png";

const people = [
    {
        name: "Kelly Williams",
        img: person,
        job: "Head of Design, Layers"
    },
    {
      name: "Kelly Brain",
      img: person,
      job: "Head of Design, Layers"
  },
  {
    name: "Kennedy Simons",
    img: person,
    job: "Head of Design, Layers"
}
]

function Testimonial () {
    const [index, setIndex] = useState(0);

    useEffect(() => {
      const interval = setInterval(() => {
        setIndex((prevState) => (prevState + 1) % people.length);
        const icons = document.querySelectorAll(".icon");
        icons.forEach((icon, i) => {
          if (i === index) {
            icon.classList.add("isActive");
          } else {
            icon.classList.remove("isActive");
          }
        });
      }, 3000);
      return () => {
        clearInterval(interval);
      };
    }, [index]);


    return (
        <section className="h-[578px] about-padding gap-[64px] bg-[#1D2939]">
            <div className="h-[386px] abt-padding gap-[32px]">
                    <div className="h-[336px] gap-[32px] flex flex-col items-center">
                        <p className="w-[1024px] h-[132px] font-medum text-[36px] text-center leading-[44px] inter tracking-[-2%] text-[#FFF]">
                            We create designs that can easily scale and sustain your business goals for years to come. <br/> Here are some ratings proving our work is future-proof.
                        </p>
                        <div className="w-[1080px] h-[172px] gap-[40px] flex flex-col items-center justify-between">
                                <div className="flex flex-col items-center gap-[16px]">
                                     <img src={people[index].img} alt="Review" height={people[index].img.height} width={people[index].img.width} />
                                   <div className="gap-[4px] h-[56px] flex flex-col items-center justify-center">
                                        <h2 className="text-[18px] text-center leading-[28px] inter font-semibold text-[#fff]">{people[index].name}</h2>
                                        <h3 className="text-[16px] leading-[24px] font-normal text-center text-[#fff]">{people[index].job}</h3>
                                   </div>
                                    <img src={stars} alt="stars" height={stars.height} width={stars.width} />
                                </div>
                                <div className="flex items-center justify-center space-x-5" >
                                  <div className={`bg-[#667085] w-[10px] h-[10px] rounded-[6px] icon transition-all duration-500 ease-in-out`}></div>
                                  <div className={`bg-[#667085] w-[10px] h-[10px] rounded-[6px] icon transition-all duration-500 ease-in-out`}></div>
                                  <div className={`bg-[#667085] w-[10px] h-[10px] rounded-[6px] icon transition-all duration-500 ease-in-out`}></div>
                               </div>
                        </div>
                    </div>
            </div>
        </section>
    )
}


export default Testimonial;