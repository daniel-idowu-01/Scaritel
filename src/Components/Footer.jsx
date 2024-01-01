import React from 'react'
import { Link } from 'react-router-dom'
import Logo from '../assests/logos/logo-white.png'
import Phone from '../assests/logos/phone-call-01.png'
import Linkedin from '../assests/logos/linkedin.png'
import Facebook from '../assests/logos/fecebook.png'
import Instagram from '../assests/logos/instagram.png'
import Twitter from '../assests/logos/twitter.png'
import WhiteBg from '../assests/logos/white-bg.png'

const Footer = () => {
  return (
    <div className='bg-[#1F3AE3] w-full text-white pt-20 pb-5 md:px-20'>
      <section
        className='flex flex-col md:flex-row justify-center items-center md:items-start md:justify-around gap-14 md:gap-0 mb-10 text-center md:text-left'>
        {/* first column */}
        <div>
          <img src={Logo} alt="" />
        </div>

        {/* second column */}
        <div className='flex flex-col gap-5'>
          <p className='font-bold'>Our Company</p>
          <Link to='/about'>About Us</Link>
          <Link to='/services'>Our Services</Link>
          <Link to='/contact'>Let's Talk</Link>
        </div>

        {/* third column */}
        <div className='flex flex-col gap-5'>
          <p className='font-bold'>Contact Us</p>
          <div className='md:flex md:justify-between'>
            <div className='relative flex justify-center items-center'>
              <img src={WhiteBg} alt="" />
              <img src={Phone} alt="" className='absolute' />
            </div>
            <div className='hidden md:block'></div>
          </div>
          <p>info@scaritel.com</p>
          <p>Lagos, Nigeria</p>
        </div>

        {/* fourth column */}
        <div className='flex flex-col gap-5'>
          <p className='font-bold'>Follow Us</p>
          <article className='flex items-center gap-1'>
            <div className='relative flex justify-center items-center'>
              <img src={WhiteBg} alt="" />
              <img src={Linkedin} alt="" className='absolute' />
            </div>
            <div className='relative flex justify-center items-center'>
              <img src={WhiteBg} alt="" />
              <img src={Facebook} alt="" className='absolute' />
            </div>
            <div className='relative flex justify-center items-center'>
              <img src={WhiteBg} alt="" />
              <img src={Instagram} alt="" className='absolute' />
            </div>
            <img src={Twitter} alt="" />
            <p>@scaritel</p>
          </article>
        </div>
      </section>

      <hr className='h-1' />

      <p className='text-center mt-2'>Scaritel   2023 . All rights reserved</p>
    </div>
  )
}

export default Footer
