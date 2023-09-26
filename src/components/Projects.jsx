import React from 'react';
import One from '../assets/p1.png'
import Two from '../assets/p2.png'
import Three from '../assets/p3.png'

const Projects = () => {
  const projects = [
    { image: One, title: 'Project 1', description: 'Clothing line landing page using typescript, framer motion, and tailwindcss' },
    { image: Two, title: 'Project 2', description: 'Image gallery application using reactjs and react dnd library' },
    { image: Three, title: 'Project 3', description: 'Simple blogpage using HTML, CSS, and JavaScript' },
  ];

  return (
    <div className="px-6 py-6">
      <h2 className='mb-4 text-3xl uppercase'>My Projects</h2>
      <ul className='flex justify-between'>
        {projects.map((project, index) => (
          <li key={index}>
            <div className='w-[300px]'>
                <img src={project.image} alt="project samples" className='w-full'/>
            </div>
            <h3 className='text-3xl mt-4'>{project.title}</h3>
            <p className='py-3'>{project.description}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;