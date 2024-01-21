import React from "react";
import Footer from "./Footer";
import ContactInfo from "./ContactInfo";
import ChatIcon from '../assests/png/message-chat-circle.svg'
import PinIcon from '../assests/png/marker-pin-02.svg'
import Phone from '../assests/png/phone.svg'
import contact from "../assests/png/contact.png";
function Contact() {
    const input_style = "outline-none py-2 px-3 border rounded-md mt-1"
    return (
        <div className="inter relative top-[80px] md:top-[108px]"> 
            <section className="flex flex-row md:flex-row">
                <article className="md:w-1/2">
                    <img
                        src={contact}
                        alt="contact"
                        width={contact.width}
                        height={contact.height}
                    />
                </article>

                <article className="p-10 md:p-20 md:w-1/2">
                    <p className="text-[48px] leading-[60px] font-bold font-['Inter] text-[#101828] md:text-4xl">
                        We'd love to learn more about you and what we can design and build together.
                    </p>

                    <form action="" className="flex flex-col gap-6 mt-10">
                        <article className="flex justify-between">
                            <div>
                                <label htmlFor="first_name" className="block font-medium text-[14px] leading-[20px] font-['Inter'] text-[#344054]">First Name</label>
                                <input type="text" name="first_name" placeholder="First Name" className={input_style} />
                            </div>
                            <div>
                                <label htmlFor="last_name" className="block font-medium text-[14px] leading-[20px] font-['Inter'] text-[#344054]">Last Name</label>
                                <input type="text" name="last_name" placeholder="Last Name" className={input_style} />
                            </div>
                        </article>

                        <div>
                            <label htmlFor="email" className="block font-medium text-[14px] leading-[20px] font-['Inter'] text-[#344054]">Email</label>
                            <input type="email" name="email" placeholder="you@company.com" className={`${input_style} w-full`} />
                        </div>

                        <article>
                            <label htmlFor="phone" className="block font-medium text-[14px] leading-[20px] font-['Inter'] text-[#344054]">Phone Number</label>
                            <div className="flex">
                                <select
                                    name="country_code"
                                    id="country_code"
                                    className={`${input_style} border-r-0 rounded-r-none`}
                                >
                                    <option value="NGN">NGN</option>
                                    <option value="GHS">GHS</option>
                                    <option value="USD">USD</option>
                                </select>
                                <input
                                    type="number"
                                    name="phone"
                                    pattern="numeric"
                                    placeholder="+234 (555) 000-0000"
                                    className={`${input_style} w-full border-l-0 rounded-l-none`}
                                />
                            </div>
                        </article>
                        
                        <div>
                            <label htmlFor="message font-medium text-[14px] leading-[20px] font-['Inter'] text-[#344054]" className="block">Message</label>
                            <textarea type="text" placeholder="Leave us a message..." className={`${input_style} w-[512px] h-[134px] rounded-[8px] gap-[8px] border c-p`}></textarea>
                        </div>
                        <article>
                            <label htmlFor="services" className="block font-medium text-[14px] leading-[24px] font-['Inter'] text-[#344054]">Services</label>
                            <section className="grid grid-cols-2 gap-2 mt-2">
                                <div className="flex gap-3">
                                    <input type="checkbox" name="website_design" id="" className="cursor-pointer"/>
                                    <label htmlFor="website_design" className="block font-medium text-[14px] leading-[24px] font-['Inter'] text-[#344054]">Website Design</label>
                                </div>

                                <div className="flex gap-3">
                                    <input type="checkbox" name="digital_marketing" id="" className="cursor-pointer" />
                                    <label htmlFor="digital_marketing" className="block font-medium text-[14px] leading-[24px] font-['Inter'] text-[#344054]">Digital Marketing</label>
                                </div>

                                <div className="flex gap-3">
                                    <input type="checkbox" name="ux_design" id="" className="cursor-pointer"/>
                                    <label htmlFor="ux_design" className="block font-medium text-[14px] leading-[24px] font-['Inter'] text-[#344054]">UX Design</label>
                                </div>

                                <div className="flex gap-3">
                                    <input type="checkbox" name="mobile_app" id="" className="cursor-pointer" />
                                    <label htmlFor="mobile_app" className="block font-medium text-[14px] leading-[24px] font-['Inter'] text-[#344054]">Mobile App Development</label>
                                </div>

                                <div className="flex gap-3">
                                    <input type="checkbox" name="user_research" id="" className="cursor-pointer"/>
                                    <label htmlFor="user_research" className="block font-medium text-[14px] leading-[24px] font-['Inter'] text-[#344054]">User Research</label>
                                </div>

                                <div className="flex gap-3">
                                    <input type="checkbox" name="other" id="" className="cursor-pointer"/>
                                    <label htmlFor="other" className="block font-medium text-[14px] leading-[24px] font-['Inter'] text-[#344054]">Other</label>
                                </div>
                            </section>
                        </article>

                        <button className="w-full h-[48px] bg-[#1F3AE3] rounded-[8px] gap-[8px] s-ppy-2 text-white">
                            Submit
                        </button>
                        
                    </form>
                </article>
            </section>

            <section className="p-10 md:p-20">
                <div className="text-center flex flex-col gap-2">
                    <p className="text-xs text-[#1F3AE3]">Contact Us</p>
                    <p className="font-semibold text-2xl">Let's design and build a project together</p>
                </div>

                <div className="flex flex-col md:flex-row justify-between gap-5 mt-5">
                    <ContactInfo icon={ChatIcon} title='Chat to support' text='We’re here to help.' address='support@untitledui.com' />

                    <ContactInfo icon={PinIcon} title='Visit Us' text='Visit our office HQ.' address='100 Smith Street Collingwood VIC 3066 AU' />

                    <ContactInfo icon={Phone} title='Call Us' text='Mon-Fri from 8am to 5pm.' address='+1 (555) 000-0000' />
                </div>
            </section>

            <Footer />

        </div>
    )
}

export default Contact;