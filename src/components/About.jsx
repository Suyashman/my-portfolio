import React from 'react';
import { motion } from 'framer-motion';
import { userInfo } from '../data/portfolio';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="container mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row items-center gap-12"
        >
          {/* Photo Placeholder */}
          <div className="w-full md:w-1/3 flex justify-center">
            <div className="relative w-64 h-64 md:w-80 md:h-80 group">
              <div className="absolute inset-0 bg-sciCyan dark:bg-sciBlue rounded-full rotate-6 opacity-20 group-hover:rotate-12 transition-transform duration-500"></div>
              <div className="absolute inset-0 bg-sciBlue dark:bg-sciCyan rounded-full -rotate-6 opacity-20 group-hover:-rotate-12 transition-transform duration-500"></div>
              <div className="relative sci-pane w-full h-full rounded-full flex items-center justify-center overflow-hidden border-2 border-sciCyan/30">
                <span className="text-6xl animate-pulse-glow text-sciCyan font-mono">_SYS</span>
              </div>
            </div>
          </div>

          {/* Bio Text */}
          <div className="w-full md:w-2/3">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6 flex items-center gap-4 text-slate-800 dark:text-white uppercase tracking-tighter">
              About Profile
              <div className="h-[1px] w-32 bg-sciCyan/50 flex-grow"></div>
            </h2>
            
            <p className="text-slate-600 dark:text-slate-300 text-lg leading-relaxed mb-6 font-sans">
              {userInfo.bio}
            </p>

            <div className="flex flex-col gap-2 mb-8 text-slate-600 dark:text-slate-400 font-mono text-sm">
              <p><strong>[ROLE] :</strong> {userInfo.role}</p>
              <p><strong>[LOC]  :</strong> {userInfo.location}</p>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              <a href={userInfo.social.github} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-sciCyan hover:text-sciCyan transition-colors text-slate-700 dark:text-slate-300 rounded-lg">
                <FiGithub size={24} />
              </a>
              <a href={userInfo.social.linkedin} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-sciBlue hover:text-sciBlue transition-colors text-slate-700 dark:text-slate-300 rounded-lg">
                <FiLinkedin size={24} />
              </a>
              <a href={userInfo.social.twitter} target="_blank" rel="noopener noreferrer" className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-sciCyan hover:text-sciCyan transition-colors text-slate-700 dark:text-slate-300 rounded-lg">
                <FiTwitter size={24} />
              </a>
              <a href={`mailto:${userInfo.email}`} className="p-3 bg-white dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-red-500 hover:text-red-500 transition-colors text-slate-700 dark:text-slate-300 rounded-lg">
                <FiMail size={24} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
