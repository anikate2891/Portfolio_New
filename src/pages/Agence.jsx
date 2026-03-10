import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'


const Agence = () => {
  gsap.registerPlugin(ScrollTrigger)

  const imgRef = useRef(null)
  const imgTagRef = useRef(null)

  const imgArry = [
  "/photos/AgencePhoto/CAMILLE_480X640_2.jpg",
  "/photos/AgencePhoto/Carl_480x640.jpg",
  "/photos/AgencePhoto/ChantalG_480x640.jpg",
  "/photos/AgencePhoto/joel_480X640_3.jpg",
  "/photos/AgencePhoto/MEGGIE_480X640_2.jpg",
  "/photos/AgencePhoto/MEL_480X640.jpg",
  "/photos/AgencePhoto/Michele_480X640.jpg",
  "/photos/AgencePhoto/Olivier_480x640.jpg"
];
  
  useGSAP(() => {
    gsap.to(imgRef.current, {
      scrollTrigger: {
        trigger: imgRef.current,
        start: 'top 20%',
        end: 'top -115%',
        pin: true,
        pinSpacing:true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1,
        onUpdate:(e)=>{
          let idx;
          if(e.progress < 1){
            idx = Math.floor(e.progress * imgArry.length)
          }else{
            idx = imgArry.length - 1
          }
          imgTagRef.current.src = imgArry[idx]
        }
      }
    });
  }, []);

  return (
    <>
      <div className="section1 relative py-1 ">
        <div ref={imgRef} className='h-80 w-65 rounded-4xl absolute top-45 left-115 overflow-hidden z-[-1]'>
          <img ref={imgTagRef} className='h-full w-full object-cover'
          src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>
      </div>

      <div className="section2 h-screen text-black">
        <div className='font-[font1] mt-[55vh]'>
      <div className='text-[20vw] text-center uppercase leading-[17vw]'>Soixan7e<br />Douze</div>

      <div className='pl-[40%] mt-22 '>
        <p className='text-6xl'> &nbsp; &nbsp; &nbsp; &nbsp;
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum repellendus et quaerat nisi incidunt assumenda aperiam, dolorem ad laborum mollitia quas odit voluptatum natus? Beatae! Lorem ipsum dolor sit amet consectetur</p>
      </div>
    </div>
      </div>


    </> 
  )
}

export default Agence
