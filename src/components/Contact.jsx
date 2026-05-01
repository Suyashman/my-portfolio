import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { userInfo } from '../data/portfolio';
import { FiMail, FiMapPin, FiSend } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    // In a real app, integrate Formspree or EmailJS here.
    // Example: fetch('https://formspree.io/f/YOUR_FORM_ID', { method: 'POST', body: formData })
    setStatus('Message sent successfully! (Demo mode)');
    setFormData({ name: '', email: '', subject: '', message: '' });
    setTimeout(() => setStatus(''), 5000);
  };

  return (
    <section id="contact" className="py-20 relative bg-slate-50/50 dark:bg-transparent">
      <div className="container mx-auto px-6 max-w-6xl">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-5xl font-display font-bold mb-16 text-center text-slate-800 dark:text-white uppercase tracking-tighter"
        >
          Secure <span className="text-gradient">Comms</span>
        </motion.h2>

        <div className="flex flex-col md:flex-row gap-12">
          {/* Contact Info (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-1/3"
          >
            <h3 className="text-2xl font-mono mb-6 text-slate-800 dark:text-white uppercase font-bold tracking-widest">Send A Message</h3>
            <p className="text-slate-600 dark:text-slate-400 mb-8 font-sans">
              Whether you have a question, a project idea, or just want to say hi, I'll try my best to get back to you!
            </p>

            <div className="flex flex-col gap-6">
              <div className="flex items-center gap-4 sci-pane p-4 border border-slate-200 dark:border-white/10 group">
                <div className="w-12 h-12 bg-sciBlue/10 dark:bg-sciCyan/10 rounded-lg flex items-center justify-center text-sciBlue dark:text-sciCyan group-hover:scale-110 transition-transform">
                  <FiMail size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest">Email_Address</h4>
                  <a href={`mailto:${userInfo.email}`} className="text-sm font-mono font-medium text-slate-800 dark:text-white hover:text-sciBlue dark:hover:text-sciCyan transition-colors">
                    {userInfo.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 sci-pane p-4 border border-slate-200 dark:border-white/10 group">
                <div className="w-12 h-12 bg-sciBlue/10 dark:bg-sciCyan/10 rounded-lg flex items-center justify-center text-sciBlue dark:text-sciCyan group-hover:scale-110 transition-transform">
                  <FiMapPin size={20} />
                </div>
                <div>
                  <h4 className="text-xs font-mono font-semibold text-slate-500 uppercase tracking-widest">Location</h4>
                  <p className="text-sm font-mono font-medium text-slate-800 dark:text-white">
                    {userInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="w-full md:w-2/3"
          >
            <form onSubmit={handleSubmit} className="sci-pane p-8 border border-slate-200 dark:border-white/10 flex flex-col gap-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2">
                  <label htmlFor="name" className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 uppercase tracking-widest">Your_Name</label>
                  <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required className="px-4 py-3 bg-white dark:bg-darkBg border border-slate-200 dark:border-white/10 focus:outline-none focus:border-sciCyan focus:ring-1 focus:ring-sciCyan text-slate-900 dark:text-white transition-all font-mono text-sm shadow-inner" placeholder="Spider_Man" />
                </div>
                <div className="flex flex-col gap-2">
                  <label htmlFor="email" className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 uppercase tracking-widest">Email_ID</label>
                  <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required className="px-4 py-3 bg-white dark:bg-darkBg border border-slate-200 dark:border-white/10 focus:outline-none focus:border-sciCyan focus:ring-1 focus:ring-sciCyan text-slate-900 dark:text-white transition-all font-mono text-sm shadow-inner" placeholder="spiderman@example.com" />
                </div>
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="subject" className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 uppercase tracking-widest">Query_Subject</label>
                <input type="text" id="subject" name="subject" value={formData.subject} onChange={handleChange} required className="px-4 py-3 bg-white dark:bg-darkBg border border-slate-200 dark:border-white/10 focus:outline-none focus:border-sciCyan focus:ring-1 focus:ring-sciCyan text-slate-900 dark:text-white transition-all font-mono text-sm shadow-inner" placeholder="Project_Inquiry" />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="message" className="text-xs font-mono font-medium text-slate-700 dark:text-slate-300 uppercase tracking-widest">Message</label>
                <textarea id="message" name="message" value={formData.message} onChange={handleChange} required rows={5} className="px-4 py-3 bg-white dark:bg-darkBg border border-slate-200 dark:border-white/10 focus:outline-none focus:border-sciCyan focus:ring-1 focus:ring-sciCyan text-slate-900 dark:text-white transition-all font-mono text-sm resize-none shadow-inner" placeholder="Hello_World..." />
              </div>

              <button type="submit" className="mt-2 flex items-center justify-center gap-2 bg-sciBlue hover:bg-sciCyan text-white py-4 px-6 font-mono uppercase tracking-widest text-sm font-bold transition-colors">
                Send Email <FiSend />
              </button>

              {status && <p className="text-sciCyan font-mono text-xs text-center mt-2 tracking-widest animate-pulse">{status}</p>}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
