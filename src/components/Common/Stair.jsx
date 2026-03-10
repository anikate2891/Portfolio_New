import React, { useRef } from 'react'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { useLocation } from 'react-router-dom'

const Stair = (props) => {
    const currentPath = useLocation().pathname
    const stairRef = useRef(null)
    const PageRef = useRef(null)

  useGSAP(() => {
    const tl = gsap.timeline()

    tl.to(stairRef.current, {
      display: 'block',
    })

    tl.from('#stair', {
      height: 0,
      stagger: {
        amount: -0.25,
      }
    })

    tl.to('#stair', {
      y: '100%',
      stagger: {
        amount: -0.25,
      }
    })

    tl.to(stairRef.current, {
      display: 'none',
    })
    tl.to('#stair', {
      y: 0,
    })

    gsap.from(PageRef.current, {
        opacity: 0,
        delay: 1.2,
        scale: 1.2,
    })


  },[currentPath])

  return (
   <div>
        <div ref={stairRef} className='h-screen w-full fixed top-0 z-2 pointer-events-none'>
        <div className='h-full w-full flex'>
          <div id='stair' className='h-full w-1/5 bg-black'></div>
          <div id='stair' className='h-full w-1/5 bg-black'></div>
          <div id='stair' className='h-full w-1/5 bg-black'></div>
          <div id='stair' className='h-full w-1/5 bg-black'></div>
          <div id='stair' className='h-full w-1/5 bg-black'></div>
        </div>
        </div>
        <div ref={PageRef} >
            {props.children}
        </div>
   </div>
  )
}

export default Stair
