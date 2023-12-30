import React from "react";
import img1 from "../assests/png/Credit card mockup.png";
import HeaderImg from '../assests/png/Container.png'
import TechImg from '../assests/png/Image.png'
import Logo1 from '../assests/logos/Logomark.png'
import Logo2 from '../assests/logos/Logomark2.png'
import Logo3 from '../assests/logos/Logomark3.png'
import Logo4 from '../assests/logos/Logomark4.png'
import Logo5 from '../assests/logos/Logomark5.png'
import Logo6 from '../assests/logos/Logomark6.png'


function Home () {
    
    return (
       <div className="relative top-[50px] md:top-[108px]">
          <img src={img1} alt="credit" className="absolute h-[450px] md:h-auto" />
          <section
             className="relative flex justify-center items-center mx-auto top-10 md:top-[100px] text-center"
          >
            <article>
               <div className="flex flex-col gap-2 md:gap-7 w-[80%] md:w-[60%] mx-auto">
                  <p className="text-3xl md:text-5xl font-semibold leading-snug">
                     Your idea blended with the latest technology
                  </p>
                  <p>We help technology-first companies create value by bringing in best development practices and skills that drive change months after months.</p>
               </div>
               <img src={HeaderImg} alt="" className="w-[95%] md:w-full mx-auto mt-10 md:mt-20" />
            </article>
          </section>

          {/* sponsors */}
          <section
             className="relative grid grid-cols-2 md:grid-cols-6 gap-5 md:gap-0 place-items-center justify-between mt-10 md:mt-44 mb-20 bg-[#1D2939] text-white p-7"
          >
               <div className="flex items-center gap-2">
                  <img src={Logo1} alt="" className="w-10 h-10" />
                  <p className="font-bold text-xl">Boltshift</p>
               </div>
               <div className="flex items-center gap-2">
                  <img src={Logo2} alt="" className="w-10 h-10" />
                  <p className="font-bold text-xl">Lightbox</p>
               </div>
               <div className="flex items-center gap-2">
                  <img src={Logo3} alt="" className="w-10 h-10" />
                  <p className="font-bold text-xl">FeatherDev</p>
               </div>
               <div className="flex items-center gap-2">
                     <img src={Logo4} alt="" className="w-10 h-10" />
                     <p className="font-bold text-xl">Spherule</p>
               </div>
               <div className="flex items-center gap-2">
                     <img src={Logo5} alt="" className="w-10 h-10" />
                     <p className="font-bold text-xl">GlobalBank</p>
               </div>
               <div className="flex items-center gap-2">
                  <img src={Logo6} alt="" className="w-10 h-10" />
                  <p className="font-bold text-xl">Nietzsche</p>
               </div>
          </section>

          {/* technology solutions */}
          <section className="flex flex-col md:flex-row gap-10 justify-between mx-7 mb-10">
             <article className="md:w-1/2 flex flex-col items-center gap-5 md:p-10">
                <p className="text-2xl font-semibold">Using improved technology solutions, we help transform brands</p>
                <p>
                  Our team of strategists, designers, and engineers creates world-class digital experiences and renowned brands that tickle the senses of users worldwide.
                </p>
                <p>
                   In a time of rapid technology development, Scaritel is committed to removing the obstacles that have long held back African SMEs, businesses and retail enterprises. With the help of technology, we can provide businesses focused solutions that smoothly integrate hardware, software, networks, and electronic tools.
                </p>
                <p>
                   We produce/supply designs that are easily scalable and will support your business objectives for many years to come.
                </p>
             </article>

             <article className="md:w-[45%]">
                <img src={TechImg} alt="" />
             </article>
          </section>

          <hr className="h-2 mx-20" />

          <div>
             Hhhj
          </div>
       </div>
    )
}

export default Home;