import { ArrowUp, Code2, Heart, Mail } from 'lucide-react';
import React from 'react';
import { PERSONAL_DATA } from '../data/cvData';
import { GithubIcon, LinkedinIcon, WhatsappIcon } from './SocialIcons';

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 py-12 relative transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Brand Info */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-cyan-500 to-indigo-600 p-0.5">
              <div className="w-full h-full bg-white dark:bg-slate-950 rounded-[10px] flex items-center justify-center transition-colors">
                <Code2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              </div>
            </div>
            <div>
              <span className="font-bold text-slate-900 dark:text-slate-100 text-sm transition-colors">
                Doni Darmawan
              </span>
              <p className="text-xs text-slate-500 dark:text-slate-400 font-mono transition-colors">
                Software Engineer • Depok, West Java
              </p>
            </div>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4 text-slate-600 dark:text-slate-400">
            <a
              href={PERSONAL_DATA.github}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm dark:shadow-none"
              aria-label="GitHub"
            >
              <GithubIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.linkedin}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm dark:shadow-none"
              aria-label="LinkedIn"
            >
              <LinkedinIcon className="w-4 h-4" />
            </a>
            <a
              href={PERSONAL_DATA.whatsapp}
              target="_blank"
              rel="noreferrer"
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors shadow-sm dark:shadow-none"
              aria-label="WhatsApp"
            >
              <WhatsappIcon className="w-4 h-4" />
            </a>
            <a
              href={`mailto:${PERSONAL_DATA.email}`}
              className="p-2 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors shadow-sm dark:shadow-none"
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>

          {/* Back to Top */}
          <button
            onClick={scrollToTop}
            className="p-2.5 rounded-xl bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 border border-slate-200 dark:border-slate-800 transition-all flex items-center gap-2 text-xs font-mono shadow-sm dark:shadow-none"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-8 pt-6 border-t border-slate-200 dark:border-slate-900 text-center text-xs text-slate-500 dark:text-slate-400 flex flex-col sm:flex-row items-center justify-between gap-2 transition-colors">
          <p>© {new Date().getFullYear()} Doni Darmawan. All rights reserved.</p>
          <p className="flex items-center gap-1 font-mono text-[11px] text-slate-500 dark:text-slate-400">
            Built with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> using React, Vite &
            Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};
