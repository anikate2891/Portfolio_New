import React from 'react'
import { Link } from 'react-router-dom'

const ProjectCard = (props) => {

  
  
  return (      
    <>
    <Link 
    onMouseEnter={() => {
        props.setActiveProject(props.name);
        props.setActiveTitle(props.type);
        props.setShowBar(true);
    }}

    onMouseLeave={() => {
      props.setActiveProject('');
      props.setActiveTitle('');
      props.setShowBar(false);
    }}
    to={props.slug} 
    className='w-full h-full pr-3 group hover:rounded-4xl relative overflow-hidden transition-all duration-400 block'>
      <img className='h-full w-full object-cover object-center' 
      src={props.image} alt="" />

      <div className='opacity-0 group-hover:opacity-100 absolute top-0 flex justify-center items-center left-0 h-full w-full bg-black/5 transition-opacity duration-500'>
        <h2 className='uppercase text-5xl px-4 font-[font2] rounded-full border-4 border-white'>
          View Project
        </h2>
      </div>
    </Link>
</>
  )
}

export default ProjectCard
