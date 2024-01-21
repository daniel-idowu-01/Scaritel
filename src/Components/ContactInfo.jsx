import React from 'react'

const ContactInfo = ({ icon, title, text, address }) => {
  return (
    <article className='rounded-md p-6 bg-[#F9FAFB] w-96'>
      <img src={icon} alt="" className='bg-[#1F3AE3] rounded-md p-3' />
      <div className='mt-6 flex flex-col gap-3'>
        <p className='font-semibold'>{title}</p>
        <p className='text-sm'>{text}</p>
        <p className='text-sm text-[#1F3AE3] font-semibold'>{address}</p>
      </div>
    </article>
  )
}

export default ContactInfo
