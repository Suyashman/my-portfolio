import React from 'react';
import { motion } from 'framer-motion';
import { skills } from '../data/portfolio';

const Skills = () => {
  // Group skills by category
  const categories = [...new Set(skills.map(skill => skill.category))];

  return (
    <section id="skills" className="py-20 relative bg-slate-50/50 dark:bg-transparent">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-slate-800 dark:text-white uppercase tracking-tight"
        >
          Core <span className="text-gradient">Competencies</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {categories.map((category, catIndex) => (
            <motion.div 
              key={category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIndex * 0.1 }}
              className="sci-pane p-6"
            >
              <h3 className="text-xl font-mono mb-6 text-sciBlue dark:text-sciCyan border-b border-slate-200 dark:border-white/10 pb-2">
                {category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.filter(s => s.category === category).map((skill, index) => (
                  <motion.div 
                    key={index} 
                    initial={{ scale: 0.8, opacity: 0 }}
                    whileInView={{ scale: 1, opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", stiffness: 100, delay: 0.1 + (index * 0.05) }}
                    className="px-4 py-2 border border-slate-300 dark:border-sciBlue/30 bg-white dark:bg-sciBlue/10 text-slate-700 dark:text-white font-mono text-sm tracking-wide relative group overflow-hidden rounded-lg"
                  >
                    <span className="relative z-10">{skill.name}</span>
                    <div className="absolute inset-0 bg-sciBlue translate-y-full group-hover:translate-y-0 transition-transform duration-300 -z-0"></div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
