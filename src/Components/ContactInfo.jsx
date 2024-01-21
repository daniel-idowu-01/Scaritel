import React from 'react'

const ContactInfo = ({ icon, title, text, address }) => {
  return (
    <article className='rounded-md p-6 bg-[#F9FAFB] w-96'>
      <img src={icon} alt="" className='bg-[#1F3AE3] rounded-md p-3' />
      <div className='mt-6 flex flex-col gap-3'>
        <p className= "font-semibold text-[20px] text-[#101828] leading-[30px] font-['Inter']">{title}</p>
        <p className= "text-[16px] font-normal leading-[24px] text-[#475467] font-['Inter']">{text}</p>
        <p className='text-[16px] text-[#1F3AE3] font-normal leading-[24px]'>{address}</p>
      </div>
    </article>
  )
}

export default ContactInfo
