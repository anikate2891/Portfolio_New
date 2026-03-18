import React, { useRef } from 'react'
import ProjectCard from '../components/Projects/ProjectCard'
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Link } from 'react-router-dom';
import{ useState } from 'react'

gsap.registerPlugin(ScrollTrigger);

const Projects = () => {

  const [activeProject, setActiveProject] = useState('');
  const [activeTitle, setActiveTitle] = useState('');
  const [showBar, setShowBar] = useState(false);

  const socialLinks = [
    { label: 'FB', to: '' },
    { label: 'IG', to: '' },
    { label: 'IN', to: '' },
    { label: 'BE', to: '' }
  ];

  // 🔥 GSAP animation (unchanged)
  useGSAP(() => {
    gsap.from('.hero', {
      height: '100px',
      stagger: { amount: 0.2 },
      scrollTrigger: {
        trigger: '.heroParent',
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    });
  });

  // 🔥 Hacker text logic
  const letters = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const intervalRef = useRef(null);
  const iterationRef = useRef(0);

  const handleHover = () => {
    const el = document.querySelector('.tagline');
    const originalText = "Built with Intent, Not just Code.";

    clearInterval(intervalRef.current); // fix multiple interval bug
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

  const projects = [
  {
    name: "Landing Page",
    type: "Web App",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
    slug: "/project-1"
  },
  {
    name: "Dashboard UI",
    type: "Web App",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
    slug: "/project-2"
  },
  {
    name: "Mobile App",
    type: "Mobile App",
    image: "https://images.unsplash.com/photo-1507238691740-187a5b1d37b8",
    slug: "/project-3"
  },
  {
    name: "E-Commerce Store",
    type: "Full Stack",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d",
    slug: "/project-4"
  },
  {
    name: "Portfolio Website",
    type: "Frontend",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6",
    slug: "/project-5"
  },
  {
    name: "Chat Application",
    type: "Real-time App",
    image: "https://images.unsplash.com/photo-1521737604893-d14cc237f11d",
    slug: "/project-6"
  }
];

  return (
    <>
   <div className={`sticky top-0 bg-white left-0 w-full h-15 text-center py-4 text-black border-2 border-black z-50 pointer-events-none flex justify-between items-center px-4 transition-all duration-300
  ${showBar ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-5'}
`}>
        <h1 className='text-4xl font-semibold uppercase font-[font2]'>{activeTitle} </h1>
        <h1 className='text-4xl font-semibold uppercase font-[font2]'>{activeProject}</h1>
    </div>

      <div className='px-4 pt-4 pb-0 w-screen'>
    
      {/* Heading */}
      <div className='pt-[30vh]'>
        <h1 className='text-[13vw] font-bold font-[font1] uppercase text-black'>
          Projects
        </h1>
      </div>

      {/* Projects */}
      <div className='-mt-18 mb-4 heroParent w-full'>
        {projects.map((elem, index) => (
          <div key={index} className='hero w-full h-120 mb-2 gap-4 overflow-hidden '>
          <ProjectCard 
              image={elem.image}
              name={elem.name}
              type={elem.type}
              slug={elem.slug}
              setActiveProject={setActiveProject}
              setActiveTitle={setActiveTitle}
              setShowBar={setShowBar} />
          </div>
        ))}
      </div>

      {/* Black Section */}
      <div
        className='mt-1 -mx-4 bg-black/90 py-6 md:py-8'
        onMouseEnter={handleHover}
        onMouseLeave={handleLeave}
      >
        <div className='mx-auto flex w-full max-w-475 flex-col gap-5 px-3 md:flex-row md:items-center md:justify-between md:px-5'>
          
          {/* Social */}
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

          {/* Contact */}
          <Link
            to='/contact'
            className='inline-flex items-center gap-3 rounded-full border border-white px-5 py-1.5 text-4xl font-black uppercase text-white hover:bg-white hover:text-black md:text-6xl'
          >
            <span>Contact</span>
          </Link>

        </div>

        {/* Tagline */}
        <div className='text-center mt-40 font-[font2] text-l md:text-2xl text-white'>
          <h1 className="tagline"></h1>
        </div>

      </div>
    </div>
    </>
  )
    
};

export default Projects;