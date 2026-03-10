import React from 'react'
import { Link } from 'react-router-dom'

const HomeBottomText = () => {
  return (
    <div className='flex items-center gap-6 mb-6 justify-center '>

      <div >
        <Link id='link' className=' text-[6vw] font-semibold uppercase rounded-full leading-[5vw] px-5  hover:text-[#D3FD50]'
        to='/projects' >Projects</Link>
      </div>

      <div>
        <Link id='link' className='text-[6vw] font-semibold uppercase rounded-full leading-[5vw] px-5 hover:border-[#D3FD50] hover:text-[#D3FD50]' 
        to='/agence'>Agence</Link>
      </div>
    </div>
  )
}
export default HomeBottomText
