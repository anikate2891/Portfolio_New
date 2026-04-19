import { useGSAP } from '@gsap/react'
import React, { useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import BlackSection from '../components/Projects/Contract'

gsap.registerPlugin(ScrollTrigger)


const Agence = () => {


  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const text = "Agence Built Different.";
const intervalRef = useRef(null);
const iterationRef = useRef(0);

const socialLinks = [
    { label: 'FB', to: 'https://www.facebook.com/ami.anikate.3' },
    { label: 'IG', to: 'https://www.instagram.com/its_ani_1922/' },
    { label: 'LI', to: 'www.linkedin.com/in/anikatekanoo' },
  ];

const handleHover = () => {
  const el = document.querySelector('.tagline');
  const originalText = text;

  clearInterval(intervalRef.current);
  iterationRef.current = 0;

  intervalRef.current = setInterval(() => {
    let str = originalText
      .split('')
      .map((char, idx) => {
        if (idx < iterationRef.current) return char;
        return letters[Math.floor(Math.random() * letters.length)];
      })
      .join('');

    el.innerText = str;

    if (iterationRef.current >= originalText.length) {
      clearInterval(intervalRef.current);
    }

    iterationRef.current += 0.3;
  }, 30);
};

const handleLeave = () => {
  clearInterval(intervalRef.current);
  iterationRef.current = 0;

  const el = document.querySelector('.tagline');
  el.innerText = "";
};

  gsap.registerPlugin(ScrollTrigger)

  const imgRef = useRef(null)
  const imgTagRef = useRef(null)

  const imgArry = [
    '/photos/Express.png',
    '/photos/NodeJs.png',
    '/photos/Mongo.png',
    '/photos/React.png',
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
        <div ref={imgRef} className='h-80 w-65 rounded-4xl absolute top-50 left-115 overflow-hidden z-[-1]'>
          <img ref={imgTagRef} className='h-full w-full object-cover'
          src="https://k72.ca/images/teamMembers/Carl_480x640.jpg?w=480&h=640&fit=crop&s=f0a84706bc91a6f505e8ad35f520f0b7" alt="" />
        </div>
      </div>

      <div className="section2 h-screen text-black">
        <div className='font-[font1] mt-[55vh]'>
      <div className='text-[20vw] text-center uppercase leading-[17vw]
      bg-gradient-to-r from-white via-black to-black
      bg-clip-text text-transparent'>MERN Stack</div>

      <div className='pl-[40%] mt-22 '>
        <p className='text-5xl'> &nbsp; &nbsp; &nbsp; &nbsp;
          MERN Stack Developer with focus on building scalable, efficient, and user-centric web applications. I work across the full stack using MongoDB, Express.js, React.js, and Node.js to develop complete, production-ready solutions. I have hands-on experience in designing RESTful APIs, implementing authentication systems, modern interfaces with clean UI/UX using React and Tailwind CSS.</p>
      </div>
    </div>
      </div>
      {/* Cooming Soon */}
      <div className='w-full h-100 bg-red-500 mt-90 p-4'></div>
      
      <div className=''>
        <BlackSection 
          socialLinks={socialLinks}
          handleHover={handleHover}
          handleLeave={handleLeave}
          text={text}
        /></div>

    </> 
  )
}

export default Agence
