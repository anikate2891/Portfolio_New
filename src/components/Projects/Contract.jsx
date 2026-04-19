import React from 'react'
import { Link } from 'react-router-dom'

const BlackSection = ({ socialLinks, handleHover, handleLeave, }) => {
  return (
    <div
      className='mt-1 -mx-4 bg-black/90 py-6 md:py-8'
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <div className='mx-auto flex w-full max-w-475 flex-col gap-5 px-3 md:flex-row md:items-center md:justify-between md:px-5'>
        
        <div className='flex flex-wrap gap-2 md:gap-3'>
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              to={item.to}
              className='rounded-full border border-white px-5 py-1.5 text-4xl font-black uppercase text-white hover:bg-white hover:text-black md:text-6xl'
            >
              {item.label}
            </Link>
          ))}
        </div>

        <Link
          to='/contact'
          className='inline-flex items-center gap-3 rounded-full border border-white px-5 py-1.5 text-4xl font-black uppercase text-white hover:bg-white hover:text-black md:text-6xl'
        >
          <span>Contact</span>
        </Link>

      </div>

      <div className='text-center mt-40 font-[font2] text-l md:text-2xl text-white'>
        <h1 className="tagline"></h1>
      </div>
    </div>
  )
}

export default BlackSection