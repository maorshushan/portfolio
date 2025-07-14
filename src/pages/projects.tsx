import React, { type JSX } from 'react';
import ProjectCard from '../components/project-card';


export type Project = {
    name: string
    description: string
    categories: string[]
    image: string
    href: string
    element: JSX.Element
  }
  
const sampleProjects = [
  {
    name: 'Gradient Puzzle',
    description: 'A color sorting game inspired by I Love Hue. Arrange the blocks to form a perfect gradient.',
    categories: ['Dev', 'Game', 'Color', 'Puzzle']
  },
  {
    name: 'Portfolio Website',
    description: 'A personal portfolio to showcase my projects, skills, and experience as a developer.',
    categories: ['React', 'Portfolio', 'Design'],
    image: 'https://dummyimage.com/601x361',
  },
  {
    name: 'Task Manager',
    description: 'A simple and intuitive task management app to boost productivity and organization.',
    categories: ['Productivity', 'App', 'React'],
    image: 'https://dummyimage.com/603x363',
  },
  {
    name: 'Weather Dashboard',
    description: 'A dashboard to view current weather and forecasts for any city, with beautiful UI.',
    categories: ['Weather', 'Dashboard', 'API'],
    image: 'https://dummyimage.com/602x362',
  },
  {
    name: 'Blog Platform',
    description: 'A modern blogging platform with markdown support and social features.',
    categories: ['Blog', 'Platform', 'Fullstack'],
    image: 'https://dummyimage.com/605x365',
  },
  {
    name: 'E-commerce Store',
    description: 'A fully-featured e-commerce store with cart, checkout, and payment integration.',
    categories: ['E-commerce', 'Store', 'React', 'Stripe'],
    image: 'https://dummyimage.com/606x366',
  },
];

const Projects: React.FC<{ projects: Project[] }> = ({ projects }) => {
  return (
    <div className="min-h-screen bg-linen">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-start w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-bold title-font mb-4 text-black">Projects</h1>
            <p className="lg:w-2/3 leading-relaxed text-base">A selection of my favorite projects, showcasing my skills in web development, design, and more.</p>
          </div>
          <div className="flex flex-wrap -m-4">
            {projects.map((project, idx) => (
              <div key={idx} className="lg:w-1/3 sm:w-1/2 p-4">
                
                    <ProjectCard
                      name={project.name}
                      image={project.image}
                      description={project.description}
                      categories={project.categories}
                    />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Projects;
