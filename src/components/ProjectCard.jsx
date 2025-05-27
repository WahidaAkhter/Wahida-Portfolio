import React from 'react';
import { FaGithub } from 'react-icons/fa';
import { motion } from 'framer-motion';

const ProjectCard = ({ title, description, githubLink, imageUrl }) => {
  return (
    <motion.div
      className="w-full  bg-slate-800 rounded-2xl shadow-lg hover:shadow-xl transition overflow-hidden"
      whileHover={{
        scale: 1.08,
        rotate: 1,
        transition: {
          type: 'spring',
          stiffness: 300,
        },
      }}
    >
      {imageUrl && (
        <img
          src={imageUrl}
          alt={title}
          className=" h-48 rounded-t-2xl"
        />
      )}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-white mb-2">{title}</h3>
        <p className="text-white mb-4">{description}</p>
        <a
          href={githubLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm font-medium text-white bg-gray-900 hover:bg-gray-700 px-4 py-2 rounded-lg transition"
        >
          <FaGithub className="text-lg" /> View on GitHub
        </a>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
