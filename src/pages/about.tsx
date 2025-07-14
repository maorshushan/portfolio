import React from 'react';
import { Chip } from '../components/chip';

const technologies = [
  { label: 'React', color: '#61dafb' },
  { label: 'TypeScript', color: '#3178c6' },
  { label: 'JavaScript', color: '#f7df1e' },
  { label: 'Node.js', color: '#3c873a' },
  { label: 'HTML5', color: '#e34c26' },
  { label: 'CSS3', color: '#264de4' },
  { label: 'Tailwind CSS', color: '#38bdf8' },
  { label: 'Python', color: '#3776ab' },
  { label: 'Figma', color: '#a259ff' },
  { label: 'Git', color: '#f34f29' },
  { label: 'Jest', color: '#99425b' },
  { label: 'Express', color: '#000000' },
];

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-linen py-16 px-4">
      <div className="max-w-3xl mx-auto bg-white rounded-xl shadow-lg p-8 space-y-10">
        {/* Short Paragraph */}
        <section>
          <h1 className="text-4xl font-bold mb-4 text-xanthous">About Me</h1>
          <p className="text-lg text-gray-700">
            Hi! I'm Maor Shushan, a passionate developer and designer who loves building beautiful, functional digital experiences. I enjoy solving problems, learning new technologies, and collaborating with others to create impactful products.
          </p>
        </section>

        {/* My Journey */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-razzmatazz">My Journey</h2>
          <p className="text-gray-700">
            My journey in tech began with curiosity and a drive to create. From tinkering with websites as a teenager to leading development teams, I've embraced every challenge as an opportunity to grow. Along the way, I've worked on diverse projects—from interactive games to robust web apps—always striving to blend creativity with technical excellence.
          </p>
        </section>

        {/* Technologies I Know */}
        <section>
          <h2 className="text-2xl font-bold mb-2 text-nonphotoblue">Technologies I Know</h2>
          <div className="flex flex-wrap gap-3 pt-2">
            {technologies.map((tech, idx) => (
              <Chip key={idx} label={tech.label} color={tech.color} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default About;
