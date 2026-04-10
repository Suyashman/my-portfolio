import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { userInfo } from '../data/portfolio';
import { FiGithub, FiStar, FiGitBranch } from 'react-icons/fi';

const GitHub = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      if (!userInfo.githubUsername) return;
      
      try {
        const res = await fetch(`https://api.github.com/users/${userInfo.githubUsername}/repos?sort=updated&per_page=6`);
        const data = await res.json();
        if (Array.isArray(data)) {
          // Filter out forks and sort by stars
          const sorted = data.filter(r => !r.fork).sort((a, b) => b.stargazers_count - a.stargazers_count).slice(0, 4);
          setRepos(sorted);
        }
      } catch (err) {
        console.error("Failed to fetch Github repos", err);
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  if (!userInfo.githubUsername || (loading === false && repos.length === 0)) {
    return null; // hide section if no valid data
  }

  return (
    <section id="github" className="py-20 relative bg-slate-50/50 dark:bg-transparent">
      <div className="container mx-auto px-6 max-w-5xl">
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-display font-bold mb-12 text-center text-slate-800 dark:text-white flex items-center justify-center gap-4 uppercase tracking-tighter"
        >
          <FiGithub className="text-sciCyan" /> Open Source Code
        </motion.h2>

        {loading ? (
          <div className="flex justify-center"><div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-sciCyan"></div></div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {repos.map((repo, index) => (
              <motion.a
                key={repo.id}
                href={repo.html_url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="sci-pane p-6 rounded-xl hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(0,240,255,0.15)] transition-all border border-slate-200 dark:border-white/10 block group"
              >
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-mono font-bold text-sciBlue dark:text-sciCyan group-hover:text-sciViolet transition-colors flex items-center gap-2">
                    {repo.name}
                  </h3>
                  <div className="flex gap-3 text-slate-500 text-sm font-mono">
                    <span className="flex items-center gap-1"><FiStar /> {repo.stargazers_count}</span>
                    <span className="flex items-center gap-1"><FiGitBranch /> {repo.forks_count}</span>
                  </div>
                </div>
                <p className="text-slate-600 dark:text-slate-400 font-sans text-sm mb-4 line-clamp-2 h-10">
                  {repo.description || "No description provided."}
                </p>
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-sciBlue shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
                  <span className="text-xs font-mono font-medium text-slate-500 uppercase">{repo.language || 'Unknown'}</span>
                </div>
              </motion.a>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GitHub;
