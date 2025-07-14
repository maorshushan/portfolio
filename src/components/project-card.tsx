import React from 'react';
import { Chip } from './chip';

interface ProjectCardProps {
  name: string;
  description: string;
  categories: string[];
  image?: string;
  className?: string;
}

const categoriesColorCodes = [
  { label: 'Dev', color: '#8bc1d6' },
  { label: 'Product Design', color: 'var(--color-xanthous)' },
  { label: 'Team Lead', color: 'var(--color-xanthous)' },
];

const ProjectCard: React.FC<ProjectCardProps> = ({ name, description, categories, image, className = '' }) => {
  return (
    <div className={`bg-white rounded-xl shadow-lg p-0 space-y-4 overflow-hidden ${className}`}>
      {image && (
        <img src={image} alt={name} className="w-full h-48 object-cover object-center" />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-black">{name}</h3>
        <p className="text-gray-700 text-base">{description}</p>
        <div className="flex flex-wrap gap-2 pt-2">
          {categories.map((cat, idx) => (
            <Chip key={idx} label={cat} color={categoriesColorCodes.find(c => c.label === cat)?.color} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
