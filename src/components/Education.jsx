import React from 'react';
import { motion } from 'framer-motion';
import { education } from '../data/portfolio';

const Education = () => {
  return (
    <section id="education" className="py-20 relative">
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-slate-800 dark:text-white uppercase tracking-tight"
        >
          Academic <span className="text-gradient">Core</span>
        </motion.h2>

        <div className="relative border-l border-sciBlue/30 ml-4 md:ml-0">
          {education.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="mb-10 ml-8 relative"
            >
              <div className="absolute -left-[37px] top-1 h-3 w-3 rounded-full bg-sciCyan shadow-[0_0_10px_rgba(0,240,255,0.8)]"></div>
              
              <div className="sci-pane p-6 rounded-xl hover:-translate-y-1 transition-transform">
                <span className="text-xs font-mono font-bold text-sciBlue dark:text-sciCyan mb-2 block uppercase tracking-wider">{item.year}</span>
                <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-1 font-sans">{item.degree}</h3>
                <h4 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-4 font-mono">{item.institution}</h4>
                <div className="flex gap-4 items-center mb-4">
                  <span className="px-3 py-1 bg-white/50 dark:bg-white/5 border border-slate-200 dark:border-white/10 rounded font-mono text-xs text-slate-700 dark:text-slate-300">
                    Score: {item.score}
                  </span>
                </div>
                <p className="text-slate-600 dark:text-slate-400 text-sm font-sans">
                  <strong className="text-slate-700 dark:text-slate-300">Modules: </strong>
                  {item.coursework}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
