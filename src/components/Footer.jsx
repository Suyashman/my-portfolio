import React from 'react';
import { userInfo } from '../data/portfolio';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-darkBg/50 backdrop-blur-md">
      <div className="container mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-slate-600 dark:text-slate-400 font-medium">
          &copy; {new Date().getFullYear()} {userInfo.name}. All rights reserved.
        </p>
        
        <p className="text-slate-500 text-sm flex items-center gap-1">
          Built with <span className="text-red-500">❤️</span> using React & Tailwind
        </p>
      </div>
    </footer>
  );
};

export default Footer;
