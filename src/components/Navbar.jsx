import React, { useState, useEffect } from 'react';
import { FiMenu, FiX, FiSun, FiMoon } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';
import { userInfo } from '../data/portfolio';

const Navbar = ({ darkMode, toggleDarkMode }) => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-5'}`}>
      <div className="container mx-auto px-6 flex justify-between items-center">
        <a href="#hero" className="text-2xl font-bold text-gradient">
          {userInfo.name.split(' ')[0]}.
        </a>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <ul className="flex gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className="text-slate-600 dark:text-slate-300 hover:text-sciBlue dark:hover:text-sciCyan transition-colors font-mono uppercase text-sm tracking-wider">
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <button onClick={toggleDarkMode} className="p-2 rounded-full border border-slate-300 dark:border-slate-700 hover:border-sciBlue dark:hover:border-sciCyan text-slate-600 dark:text-slate-300 transition-colors">
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
        </nav>

        {/* Mobile Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <button onClick={toggleDarkMode} className="p-2 rounded-full border border-slate-300 dark:border-slate-700 text-slate-600 dark:text-slate-300">
            {darkMode ? <FiSun size={18} /> : <FiMoon size={18} />}
          </button>
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="text-slate-800 dark:text-slate-300 hover:text-sciBlue dark:hover:text-sciCyan transition-colors">
            {mobileMenuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.nav 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden glass border-t border-slate-200 dark:border-slate-700 overflow-hidden"
          >
            <ul className="flex flex-col items-center py-6 gap-6">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a 
                    href={link.href} 
                    onClick={() => setMobileMenuOpen(false)}
                    className="text-lg text-slate-800 dark:text-slate-200 font-medium"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
