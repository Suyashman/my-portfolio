import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { userInfo } from '../data/portfolio';
import { FiArrowRight, FiDownload } from 'react-icons/fi';

const Typewriter = ({ texts }) => {
  const [currentText, setCurrentText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeout;
    const currentFullText = texts[currentIndex];
    
    if (isDeleting) {
      if (currentText === '') {
        setIsDeleting(false);
        setCurrentIndex((prev) => (prev + 1) % texts.length);
        timeout = setTimeout(() => {}, 500); // Pause before typing next
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, currentText.length - 1));
        }, 50);
      }
    } else {
      if (currentText === currentFullText) {
        timeout = setTimeout(() => {
          setIsDeleting(true);
        }, 2000); // Pause at end of text
      } else {
        timeout = setTimeout(() => {
          setCurrentText(currentFullText.substring(0, currentText.length + 1));
        }, 100);
      }
    }
    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentIndex, texts]);

  return (
    <span className="text-accentCyan font-semibold border-r-2 border-accentCyan pr-1 animate-pulse">
      {currentText || '\u00A0'}
    </span>
  );
};

const Hero = () => {
  const [contactClicks, setContactClicks] = useState(0);
  const [buttonMessage, setButtonMessage] = useState("Initiate Contact");
  const [isWarping, setIsWarping] = useState(false);

  const handleContactClick = (e) => {
    if (contactClicks < 4) {
      e.preventDefault();
      const nextClicks = contactClicks + 1;
      setContactClicks(nextClicks);
      
      if (nextClicks === 1) setButtonMessage("Establishing secure link...");
      else if (nextClicks === 2) setButtonMessage("Bypassing firewall...");
      else if (nextClicks === 3) setButtonMessage("Decrypting protocol...");
      else if (nextClicks === 4) setButtonMessage("Handshake successful...");
    } else if (contactClicks === 4) {
      e.preventDefault();
      setContactClicks(5);
      setButtonMessage("Warping to comms...");
      setIsWarping(true);
      setTimeout(() => {
        window.location.href = '#contact';
        setIsWarping(false);
        setContactClicks(0);
        setButtonMessage("Initiate Contact");
      }, 800);
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20 pb-10">
      {/* Easter Egg Warp Effect overlay */}
      <AnimatePresence>
        {isWarping && (
          <motion.div 
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 20 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="absolute inset-0 z-50 bg-white dark:bg-sciCyan origin-center"
          />
        )}
      </AnimatePresence>

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
            className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 font-mono mb-8 h-12"
          >
            <Typewriter texts={userInfo.taglines} />
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
              onClick={handleContactClick}
              className={`relative overflow-hidden px-8 py-4 rounded-xl font-mono text-sm uppercase tracking-wider font-bold transition-all duration-300 flex items-center justify-center min-w-[280px]
                ${contactClicks === 0 ? 'bg-slate-900 dark:bg-white text-white dark:text-slate-900 hover:shadow-[0_0_20px_rgba(59,130,246,0.4)]' : 
                  contactClicks === 5 ? 'bg-sciCyan text-slate-900 shadow-[0_0_30px_rgba(0,240,255,0.8)] animate-pulse' : 
                  'bg-sciBlue text-white shadow-[0_0_15px_rgba(59,130,246,0.6)]'}
              `}
            >
              <span className="relative z-10 flex items-center gap-2">
                {buttonMessage} {contactClicks === 0 && <FiArrowRight />}
              </span>
            </a>
            
            <a href="/resume.pdf" target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl border border-slate-300 dark:border-slate-700 hover:border-sciBlue dark:hover:border-sciCyan text-slate-600 dark:text-slate-300 hover:text-sciBlue dark:hover:text-sciCyan font-mono text-sm uppercase tracking-wider transition-colors flex items-center gap-2">
              <FiDownload /> Resume.pdf
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
