import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/portfolio';
import { FiGithub, FiExternalLink, FiStar } from 'react-icons/fi';

const Projects = () => {
  return (
    <section id="projects" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-12 text-center text-slate-900 dark:text-white uppercase tracking-tight"
        >
          Featured <span className="text-gradient">Projects</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="sci-pane p-6 flex flex-col h-full group hover:-translate-y-2 transition-all duration-300"
            >
              <div className="flex flex-col h-full relative z-10">
                {project.featured && (
                  <div className="absolute top-0 right-0 px-2 py-1 bg-sciBlue/10 text-sciBlue dark:bg-sciCyan/10 dark:text-sciCyan text-xs font-mono font-bold uppercase tracking-widest rounded">
                    <FiStar className="inline mr-1" /> Featured
                  </div>
                )}
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-sciBlue dark:group-hover:text-sciCyan transition-colors mr-6">
                  {project.name}
                </h3>
                
                <p className="text-slate-600 dark:text-slate-400 mb-6 flex-grow font-sans text-sm">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.techStack.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="text-[10px] font-mono px-2 py-1 bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-slate-300 border border-slate-200 dark:border-white/10 uppercase tracking-widest rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <div className="flex gap-4 mt-auto pt-4 border-t border-slate-200 dark:border-white/10">
                  {project.githubUrl && (
                    <a 
                      href={project.githubUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-slate-500 hover:text-sciBlue dark:hover:text-white transition-colors flex items-center gap-2 font-mono text-sm uppercase"
                    >
                      <FiGithub size={16} /> Code
                    </a>
                  )}
                  {project.liveUrl && (
                    <a 
                      href={project.liveUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-sciBlue dark:text-sciCyan hover:text-sciViolet dark:hover:text-sciViolet transition-colors flex items-center gap-2 font-mono text-sm uppercase"
                    >
                      <FiExternalLink size={16} /> Launch
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
