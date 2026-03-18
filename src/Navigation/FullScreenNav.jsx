import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";
import gsap from "gsap";
import React, { useRef } from 'react'

const FullScreenNav = () => {

    const container = useRef();

useGSAP(() => {
  const tl = gsap.timeline();

    tl.from(".link h1", {
        rotateX: 90,
        transformOrigin: "top",
        stagger: 0.1,
        duration: 0.8,
        ease: "power4.out",
    });

    tl.to(".moveX", {
        xPercent: -100,
        repeat: -1,
        duration: 10,
        ease: "linear",
    });

}, { scope: container });

  const navigate = useNavigate();

  return (
    <div ref={container} className="h-screen w-full absolute bg-black py-38">

      {/* ✅ CROSS BUTTON */}
      <div
        onClick={() => window.history.length > 1 ? navigate(-1) : navigate('/')}
        className="absolute top-5 right-5 w-12 h-12 flex items-center justify-center cursor-pointer z-50"
      >
        <div className="relative w-2xl h-6">
          <span className="absolute w-full h-0.5 bg-[#D3FD50] rotate-45 top-1/2 -translate-y-1/2"></span>
          <span className="absolute w-full h-0.5 bg-[#D3FD50] -rotate-45 top-1/2 -translate-y-1/2"></span>
        </div>
      </div>

        <div className='flex w-full justify-between items-start'>
        </div>

      <div className=''>
        <div className='link border-y relative ' >
            <div>
              <h1 className='font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>PROJETS</h1>
            </div>

            <div className='movelink absolute flex text-black top-0 bg-[#D3FD50]'>
                <div className='moveX shrink-0 flex item-center'>
                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />

                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/Thumbnail.png" alt="" />
                </div>

                <div className='moveX shrink-0 flex item-center'>
                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />

                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/Thumbnail.png" alt="" />
                </div>
            </div>

        </div>

        <div className='link border-y relative ' >
            <div>
              <h1 className='font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>PROJETS</h1>
            </div>

            <div className='movelink absolute flex text-black top-0 bg-[#D3FD50]'>
                <div className='moveX shrink-0 flex item-center'>
                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />

                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/Thumbnail.png" alt="" />
                </div>

                <div className='moveX shrink-0 flex item-center'>
                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />

                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/Thumbnail.png" alt="" />
                </div>
            </div>

        </div>

        <div className='link border-y relative ' >
            <div>
              <h1 className='font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>PROJETS</h1>
            </div>

            <div className='movelink absolute flex text-black top-0 bg-[#D3FD50]'>
                <div className='moveX shrink-0 flex item-center'>
                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />

                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/Thumbnail.png" alt="" />
                </div>

                <div className='moveX shrink-0 flex item-center'>
                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />

                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/Thumbnail.png" alt="" />
                </div>
            </div>

        </div>

        <div className='link border-y relative ' >
            <div>
                <h1 className='font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>PROJETS</h1>
            </div>

            <div className='movelink absolute flex text-black top-0 bg-[#D3FD50]'>
                <div className='moveX shrink-0 flex item-center'>
                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />

                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/Thumbnail.png" alt="" />
                </div>

                <div className='moveX shrink-0 flex item-center'>
                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/PJC_SiteK72_Thumbnail_640x290.jpg" alt="" />

                    <h2 className='whitespace-nowrap font-[font1] text-[8vw] text-center leading-[0.8] pt-5'>POUR TOUT VOIR</h2>

                    <img className='mt-2 h-26 w-72 rounded-full object-cover' src="/Nav/Thumbnail.png" alt="" />
                </div>
            </div>

        </div>
        
    </div>
    </div>
  )
}

export default FullScreenNav
