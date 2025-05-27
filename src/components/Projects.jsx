
import ProjectCard from './ProjectCard';
import { motion } from 'framer-motion';

// Slide-in variant
const slideInVariant = {
  hidden: { opacity: 0, y: 50 },
  visible: (index) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      delay: index * 0.2,
      type: 'spring',
      stiffness: 60,
    },
  }),
};

const Projects = () => {
  const projectList = [
    {
      title: 'Portfolio Website',
      description: 'A personal portfolio built with html, Tailwind css and javascript.',
      githubLink: 'https://github.com/WahidaAkhter/Beautiful-Simple-Portfolio',
      imageUrl: 'https://i.imgur.com/C4jYrr1.png',
    },
    {
      title: 'Weattle',
      description: 'travel app built with React bootstrap,react-router and firebase.',
      githubLink: 'https://github.com/WahidaAkhter/weattle',
      imageUrl: 'https://i.imgur.com/4vFs2Qi.png'
    },
    {
      title: 'Panda E-commerce Website',
      description: 'An e-commerce website built with html,CSS and Bootstrap.',
      githubLink: 'https://github.com/WahidaAkhter/Panda-Commerce-Site',
      imageUrl: 'https://i.imgur.com/kIYDLTq.png',
    },
  ];

  return (
    <motion.section
      id="projects"
      className="py-16 px-6"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* Section Title */}
      <motion.h2
        className="text-4xl font-bold text-center mb-12 text-white"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        viewport={{ once: true }}
      >
        Projects
      </motion.h2>

      {/* Cards Grid with slide-in */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projectList.map((project, index) => (
          <motion.div
            key={index}
            custom={index}
            variants={slideInVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <ProjectCard
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              imageUrl={project.imageUrl}
            />
          </motion.div>
        ))}
      </div>
      <div className='mt-12 text-center'>
        <a
        href="https://github.com/WahidaAkhter"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition duration-300"
      >
        See More Projects on GitHub
      </a>
      </div>

    </motion.section>
  );
};

export default Projects;
