import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects } from '../data/portfolio';
import { FiGithub, FiExternalLink, FiStar, FiFileText, FiX, FiYoutube } from 'react-icons/fi';

const Projects = () => {
  const [selectedDoc, setSelectedDoc] = useState(null);

  const closeDoc = () => {
    setSelectedDoc(null);
  };

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
                <div className="flex justify-between items-start mb-3">
                  <div className="flex gap-2 flex-wrap">
                    {project.featured && (
                      <div className="px-2 py-1 bg-sciBlue/10 text-sciBlue dark:bg-sciCyan/10 dark:text-sciCyan text-xs font-mono font-bold uppercase tracking-widest rounded flex items-center">
                        <FiStar className="inline mr-1" /> Featured
                      </div>
                    )}
                    {project.type && (
                      <div className={`px-2 py-1 text-xs font-mono font-bold uppercase tracking-widest rounded flex items-center ${
                        project.type.toLowerCase() === 'solo' 
                          ? 'bg-sciViolet/10 text-sciViolet dark:bg-sciViolet/20 dark:text-[#b084f5]' 
                          : 'bg-emerald-500/10 text-emerald-600 dark:bg-emerald-400/10 dark:text-emerald-400'
                      }`}>
                        {project.type}
                      </div>
                    )}
                  </div>
                  {project.date && (
                    <span className="text-xs font-mono text-slate-400 dark:text-slate-500 uppercase tracking-wider whitespace-nowrap ml-2 mt-1">
                      {project.date}
                    </span>
                  )}
                </div>
                
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-slate-800 dark:text-white group-hover:text-sciBlue dark:group-hover:text-sciCyan transition-colors">
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
                
                <div className="flex flex-wrap gap-4 mt-auto pt-4 border-t border-slate-200 dark:border-white/10">
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
                  {project.docUrl && (
                    <button 
                      onClick={() => setSelectedDoc(project)}
                      className="text-emerald-600 dark:text-emerald-400 hover:text-emerald-500 dark:hover:text-emerald-300 transition-colors flex items-center gap-2 font-mono text-sm uppercase"
                    >
                      <FiFileText size={16} /> Docs
                    </button>
                  )}
                  {project.youtubeUrl && (
                    <a 
                      href={project.youtubeUrl} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-red-500 hover:text-red-600 dark:text-red-400 dark:hover:text-red-300 transition-colors flex items-center gap-2 font-mono text-sm uppercase"
                    >
                      <FiYoutube size={16} /> Demo
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedDoc && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            onClick={closeDoc}
          >
            <button 
              onClick={closeDoc}
              className="absolute top-4 right-4 z-[110] p-3 rounded-full bg-slate-900/50 hover:bg-slate-900 border border-white/10 text-white transition-all shadow-lg"
              title="Close Documentation"
            >
              <FiX size={24} />
            </button>
            <motion.div 
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", bounce: 0, duration: 0.4 }}
              className="relative w-full max-w-6xl h-[90vh] bg-slate-800 rounded-xl overflow-hidden shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe 
                src={selectedDoc.docUrl} 
                className="w-full h-full border-none"
                title={`${selectedDoc.name} Documentation`}
                width="100%"
                height="100%"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;
