import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { certificates } from '../data/portfolio';
import { FiAward, FiExternalLink } from 'react-icons/fi';

const CertificateCard = ({ cert, index }) => {
  const [activePdfIndex, setActivePdfIndex] = useState(0);
  const hasMultiplePdfs = cert.pdfs && cert.pdfs.length > 0;
  const currentUrl = hasMultiplePdfs ? cert.pdfs[activePdfIndex].url : cert.credentialUrl;

  return (
    <motion.div 
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="sci-pane p-6 flex flex-col h-full hover:shadow-[0_0_20px_rgba(139,92,246,0.15)] hover:-translate-y-2 transition-all duration-300"
    >
      <div className="flex justify-between items-start mb-4">
        <div className="p-3 bg-sciViolet/10 text-sciViolet dark:text-sciViolet rounded-lg">
          <FiAward size={24} />
        </div>
        <span className="text-xs font-mono font-semibold px-2 py-1 bg-slate-200 dark:bg-white/10 text-slate-700 dark:text-slate-300 rounded uppercase tracking-widest">
          {cert.category}
        </span>
      </div>
      
      <h3 className="text-xl font-bold mb-2 text-slate-800 dark:text-white">{cert.title}</h3>
      <p className="text-slate-600 dark:text-slate-400 font-mono text-sm mb-1">{cert.platform}</p>
      <p className="text-xs font-mono text-slate-500 mb-4 uppercase">{cert.date}</p>
      
      {hasMultiplePdfs && (
        <div className="flex gap-2 mb-4 overflow-x-auto pb-2 scrollbar-thin scrollbar-thumb-sciBlue scrollbar-track-transparent">
          {cert.pdfs.map((pdf, idx) => (
            <button
              key={idx}
              onClick={(e) => {
                e.preventDefault();
                setActivePdfIndex(idx);
              }}
              className={`px-3 py-1 text-xs font-mono uppercase tracking-wider rounded whitespace-nowrap transition-colors z-20 ${
                activePdfIndex === idx 
                  ? 'bg-sciBlue text-white' 
                  : 'bg-slate-200 dark:bg-white/10 text-slate-600 dark:text-slate-300 hover:bg-slate-300 dark:hover:bg-white/20'
              }`}
            >
              {pdf.name || `Cert ${idx + 1}`}
            </button>
          ))}
        </div>
      )}
      
      <div className="mt-auto pt-4 border-t border-slate-200 dark:border-white/10">
        <div className="w-full h-32 overflow-hidden rounded-lg bg-slate-200 dark:bg-slate-800 relative group-hover:shadow-[0_0_15px_rgba(0,240,255,0.3)] transition-shadow">
          {currentUrl && currentUrl !== '#' ? (
            <iframe 
              src={`${currentUrl}#toolbar=0&navpanes=0&scrollbar=0&view=FitH`} 
              className="w-full h-[500px] -mt-10 pointer-events-none opacity-80 group-hover:opacity-100 transition-opacity"
              title={cert.title}
            />
          ) : (
            <div className="absolute inset-0 flex items-center justify-center text-slate-400 dark:text-slate-500 font-mono text-xs uppercase tracking-widest">
              [PDF_Unavailable]
            </div>
          )}
          {/* Click overlay to still allow opening the cert in a new tab if needed */}
          {currentUrl && currentUrl !== '#' && (
            <a href={currentUrl} target="_blank" rel="noopener noreferrer" className="absolute inset-0 z-10 cursor-pointer" title="View Full Certificate"></a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Certificates = () => {
  return (
    <section id="certificates" className="py-20 relative bg-slate-50/50 dark:bg-transparent">
      <div className="container mx-auto px-6">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-12 text-center text-slate-900 dark:text-white uppercase tracking-tight"
        >
          Verified <span className="text-gradient">Credentials</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificates.map((cert, index) => (
            <CertificateCard key={index} cert={cert} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certificates;
