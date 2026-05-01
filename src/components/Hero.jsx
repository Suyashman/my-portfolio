import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { userInfo } from '../data/portfolio';
import { FiArrowRight, FiDownload, FiX } from 'react-icons/fi';

const FancyText = ({ texts }) => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [texts]);

  return (
    <div className="relative h-14 w-full flex items-center justify-center overflow-visible">
      <AnimatePresence mode="wait">
        <motion.div
          key={index}
          initial={{ y: 40, opacity: 0, scale: 0.8, filter: "blur(10px)", rotateX: -90 }}
          animate={{ y: 0, opacity: 1, scale: 1, filter: "blur(0px)", rotateX: 0 }}
          exit={{ y: -40, opacity: 0, scale: 1.1, filter: "blur(10px)", rotateX: 90 }}
          transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          className="absolute text-2xl md:text-3xl font-display font-bold text-transparent bg-clip-text bg-gradient-to-r from-sciBlue via-sciCyan to-sciViolet uppercase tracking-widest whitespace-nowrap drop-shadow-[0_0_15px_rgba(0,240,255,0.5)]"
          style={{ transformOrigin: "center center" }}
        >
          {texts[index]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

const Hero = () => {
  const [showResume, setShowResume] = useState(false);

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">

      <div className="absolute top-1/4 -right-20 w-[30rem] h-[30rem] bg-sciCyan/10 dark:bg-sciCyan/20 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-32 -left-20 w-[40rem] h-[40rem] bg-sciViolet/10 dark:bg-sciViolet/20 rounded-full blur-[150px] pointer-events-none" />

      <div className="container mx-auto px-6 z-10 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center sci-pane p-10 md:p-16 max-w-4xl w-full border border-slate-200 dark:border-white/10"
        >
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <div className="inline-block px-4 py-1.5 rounded-full border border-sciBlue/30 bg-sciBlue/5 text-sciBlue dark:text-sciCyan font-mono text-sm tracking-wider uppercase">
              System Online // {userInfo.role}
            </div>
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white mb-6 tracking-tighter"
          >
            {userInfo.name.split(' ')[0]} <span className="text-gradient font-light">{userInfo.name.split(' ')[1] || ''}</span>
          </motion.h1>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="w-full mb-8"
          >
            <FancyText texts={userInfo.taglines} />
          </motion.div>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-slate-500 dark:text-slate-400 text-lg mb-12 max-w-2xl font-sans leading-relaxed"
          >
            {userInfo.bio}
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-6 w-full sm:w-auto"
          >
            <a 
              href="#contact" 
              className="relative overflow-hidden px-8 py-4 rounded-xl font-mono text-sm uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]"
            >
              <span className="relative z-10 flex items-center gap-2">
                Initiate Contact <FiArrowRight />
              </span>
            </a>
            
            <button 
              onClick={() => setShowResume(true)}
              className="px-8 py-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-sciBlue dark:hover:border-sciCyan text-slate-600 dark:text-slate-300 hover:text-sciBlue dark:hover:text-sciCyan font-mono text-sm uppercase tracking-wider transition-colors flex items-center gap-2"
            >
              <FiDownload /> Resume.pdf
            </button>
          </motion.div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showResume && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 backdrop-blur-sm p-4 md:p-8"
            onClick={() => setShowResume(false)}
          >
            <button 
              onClick={() => setShowResume(false)}
              className="absolute top-4 right-4 z-[110] p-3 rounded-full bg-slate-900/50 hover:bg-slate-900 border border-white/10 text-white transition-all shadow-lg"
              title="Close Resume"
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
                src="/resume.pdf" 
                className="w-full h-full border-none"
                title="Resume"
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

export default Hero;
