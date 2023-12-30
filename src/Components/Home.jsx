import React from "react";
import img1 from "../assests/png/Credit card mockup.png";
import HeaderImg from '../assests/png/Container.png'
import TechImg from '../assests/png/Image.png'
import Contents from '../assests/png/Contents.png'
import Logo1 from '../assests/logos/Logomark.png'
import Logo2 from '../assests/logos/Logomark2.png'
import Logo3 from '../assests/logos/Logomark3.png'
import Logo4 from '../assests/logos/Logomark4.png'
import Logo5 from '../assests/logos/Logomark5.png'
import Logo6 from '../assests/logos/Logomark6.png'
import DigiImg from '../assests/logos/digtal-marketing.png'
import UIUX from '../assests/logos/ui-ux.png'
import Web from '../assests/logos/web-design.png'
import Ecom from '../assests/logos/e-com.png'
import App from '../assests/logos/mobile-app.png'
import Video from '../assests/logos/video-edit.png'
import Avatar from '../assests/logos/Avatar.png'
import LeftArrow from '../assests/logos/left_arrow.png'
import RightArrow from '../assests/logos/right_arrow.png'
import { FaStar } from 'react-icons/fa'
import Footer from "./Footer";


function Home() {
   
   const skills = [
      {
         logo: DigiImg,
         title: 'Digital Marketing',
         text: 'Grow your business with digital marketing by implementing digital marketing strategies that draw in new clients and produce leads to drive business growth.'
      },
      {
         logo: UIUX,
         title: 'UI/UX Design Services',
         text: 'As a UX/UI Design Company, we give your website an interactive design, perspective interface, animation, graphics, and visual features.'
      },
      {
         logo: Web,
         title: 'Website Design Services',
         text: 'We create websites that turn browsers into buyers -> buyers into customers -> customers into long-term fans.'
      },
      {
         logo: Ecom,
         title: 'Ecommerce',
         text: 'COMING SOON'
      },
      {
         logo: App,
         title: 'Mobile App Development Services',
         text: 'COMING SOON'
      },
      {
         logo: Video,
         title: 'Video Editing',
         text: 'COMING SOON'
      },
   ]
    
   
    return (
       <div className="inter relative top-[80px] md:top-[108px]">
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
             <article className="relative md:top-10 md:w-1/2 flex flex-col items-center gap-10 md:p-10 h-full">
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

          <hr className="hidden md:block h-2 mx-20" />

          {/* start-to-finish development */}
          <section className="p-5 md:p-20">
             <div className="text-center md:w-1/2 mx-auto">
                <p className="md:w-[80%] mx-auto text-2xl font-semibold">One scalable team for start-to-finish development</p>
                <p className="mx-auto mt-2">In today's device-driven world,  digital experiences are everything. Your online brand should combine the eagerness and service of our company's founders with the main target and drive of your top sales leaders. This allows you to connect, serve and engage with your audience on your website, storefront or mobile application.</p>
             </div>

             <div className="grid md:grid-cols-3 gap-10 mt-20">
                {
                   skills.map((skill, index) => (
                      <article key={index} className="flex flex-col gap-3 text-center">
                         <img src={skill.logo} alt="" className="mx-auto" />
                         <p className="font-semibold text-xl">{skill.title}</p>
                         <p>{skill.text}</p>
                      </article>
                   ))
               }
             </div>
          </section>

          <hr className="hidden md:block h-0.5 bg-gray-400" />

          {/* real stories */}
          <section
             className="flex flex-col md:flex-row gap-10 items-center justify-between mx-7 my-10 md:p-10"
          >
             <article className="flex flex-col gap-7 md:gap-14 md:w-[50%]">
                <div className="flex gap-1 text-amber-500">
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                     <FaStar />
                </div>

                <p className="font-bold text-3xl md:w-[80%]">
                   Real stories from our valued clients who transformed their businesses with our services
                </p>

                <div className="flex flex-col md:flex-row gap-5 justify-between">
                  <article className="flex items-center gap-2">
                     <img src={Avatar} alt="" />
                     <div>
                        <p>Katherine Moss</p>
                        <p className="text-black opacity-50">Project Manager, Layes</p>
                     </div>
                   </article>
                   
                   <article className="flex gap-5">
                      <img src={LeftArrow} alt="" />
                      <img src={RightArrow} alt="" />
                   </article>
                </div>
                
             </article>

             <article className="md:w-[50%]">
                <img src={Contents} alt="" />
             </article>
          </section>

          {/* be the first to know */}
          <section className="flex justify-center items-baseline text-center mb-10">
             <article className="flex flex-col gap-5 bg-[#F9FAFB] w-[90%] md:w-[80%] p-10">
                <p className="text-2xl font-bold">Be the first to know</p>
                <p className="md:w-[60%] mx-auto">Sign up for our newsletter to receive monthly news, updates, and insights from Scaritel.</p>
                <div className="mx-auto w-fit text-left">
                   <form
                      action=""
                      className="flex flex-col md:flex-row gap-2 justify-center items-start"
                   >
                      <div>
                        <input
                           type="email"
                           name="email"
                           id="email"
                           className="border py-3 px-4 rounded-md outline-none md:w-80"
                           placeholder="Enter your email"
                        />
                        <p className="text-sm">We care about your data in our <span className="underline">privacy policy</span>.</p>
                      </div>
                      <button className="bg-[#1F3AE3] py-3 px-5 text-white rounded-md w-full">
                         Submit
                      </button>
                  </form>
                </div>
             </article>
          </section>

          {/* footer component */}
          <Footer />
       </div>
    )
}

export default Home;