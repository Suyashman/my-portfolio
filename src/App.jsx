import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Education from './components/Education';
import Certificates from './components/Certificates';
import Projects from './components/Projects';
import GitHub from './components/GitHub';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode');
    return saved ? JSON.parse(saved) : true;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
    if (darkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className="min-h-screen relative overflow-x-hidden font-sans scroll-smooth text-slate-800 dark:text-slate-300">
      {/* Sci-fi background elements */}
      <div className="fixed inset-0 z-[-2] pointer-events-none transition-colors duration-500">
        <div className="absolute inset-0 bg-transparent dark:bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] dark:from-sciBlue/10 dark:via-darkBg dark:to-darkBg"></div>
        <div className="absolute top-0 w-full h-[1px] bg-gradient-to-r from-transparent via-sciCyan/30 to-transparent"></div>
      </div>

      <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />
      <main className="relative z-0">
        <Hero />
        <About />
        <Skills />
        <Education />
        <Certificates />
        <Projects />
        <GitHub />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
