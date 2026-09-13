import React, { useState } from 'react';
import { Package, ExternalLink, Copy, Check, Terminal } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { NPM_PACKAGES, NpmPackage } from '../data/cvData';
import { useNpmVersions } from '../hooks/useNpmVersions';

export const NpmSpotlight: React.FC = () => {
  const [copiedPkg, setCopiedPkg] = useState<string | null>(null);
  const npmVersions = useNpmVersions(NPM_PACKAGES);

  const handleCopy = (cmd: string, pkgName: string) => {
    navigator.clipboard.writeText(cmd);
    setCopiedPkg(pkgName);
    setTimeout(() => setCopiedPkg(null), 2000);
  };

  return (
    <section
      id="npm-packages"
      className="py-16 sm:py-20 relative bg-slate-100/60 dark:bg-slate-950/60 transition-colors"
    >
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 right-0 w-[300px] sm:w-[500px] h-[300px] sm:h-[500px] bg-indigo-500/5 rounded-full blur-[100px] sm:blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-cyan-600 dark:text-cyan-400 shadow-sm dark:shadow-none transition-colors">
            <Package className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Published Open Source NPM Packages</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight transition-colors">
            Developer Tools & <span className="text-gradient">NPM Packages</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg transition-colors">
            Reusable libraries and CLI utilities built and published to NPM to empower the frontend
            & Node.js developer community.
          </p>
        </div>

        {/* NPM Package Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {NPM_PACKAGES.map((pkg: NpmPackage) => (
            <div
              key={pkg.name}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 border border-slate-200/80 dark:border-slate-800 flex flex-col justify-between relative group transition-colors"
            >
              {/* Top Header */}
              <div>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-cyan-700 dark:text-cyan-400 transition-colors">
                    {pkg.category}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-xs font-mono text-emerald-700 dark:text-emerald-400 flex items-center gap-1 font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 dark:bg-emerald-400"></span>
                    v{npmVersions[pkg.name] || pkg.version}
                  </span>
                </div>

                {/* Package Name */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors flex items-center gap-2">
                  <Package className="w-5 h-5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                  <span className="truncate">{pkg.name}</span>
                </h3>

                {/* Description */}
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed transition-colors">
                  {pkg.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-4">
                  {pkg.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-900/80 text-[11px] font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Install Command & Footer Links */}
              <div className="mt-6 pt-4 border-t border-slate-200 dark:border-slate-800/80 space-y-3.5 transition-colors">
                {/* Copy Command Box */}
                <div className="bg-slate-900 dark:bg-slate-950 rounded-xl p-2.5 border border-slate-700 dark:border-slate-800/90 flex items-center justify-between gap-2 font-mono text-[11px] sm:text-xs text-slate-100 dark:text-slate-300 shadow-inner">
                  <div className="flex items-center gap-2 min-w-0">
                    <Terminal className="w-3.5 h-3.5 text-cyan-400 flex-shrink-0" />
                    <span className="truncate">{pkg.installCmd}</span>
                  </div>
                  <button
                    onClick={() => handleCopy(pkg.installCmd, pkg.name)}
                    className="p-1.5 rounded-lg bg-slate-800 dark:bg-slate-900 hover:bg-slate-700 dark:hover:bg-slate-800 text-slate-300 dark:text-slate-400 hover:text-cyan-400 transition-all flex-shrink-0 focus:outline-none"
                    title="Copy install command"
                  >
                    {copiedPkg === pkg.name ? (
                      <Check className="w-3.5 h-3.5 text-emerald-400" />
                    ) : (
                      <Copy className="w-3.5 h-3.5" />
                    )}
                  </button>
                </div>

                {/* Action Links */}
                <div className="flex items-center justify-between gap-2.5 text-xs font-semibold">
                  <a
                    href={pkg.npmUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-red-500/10 hover:bg-red-500/20 text-red-700 dark:text-red-300 border border-red-500/20 transition-all"
                  >
                    <span className="font-bold text-red-600 dark:text-red-400">npm</span>
                    <span>Package</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>

                  <a
                    href={pkg.githubUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 rounded-lg bg-slate-100 dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-all"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>Source</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
