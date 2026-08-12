import React from 'react';
import { Layers, ExternalLink, Sparkles, Star } from 'lucide-react';
import { FEATURED_PROJECTS, Project } from '../data/cvData';

export const Projects: React.FC = () => {
  const heroProject = FEATURED_PROJECTS[0];
  const gridProjects = FEATURED_PROJECTS.slice(1);

  return (
    <section id="projects" className="py-16 sm:py-20 relative bg-slate-950/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <Layers className="w-4 h-4 text-cyan-400" />
            <span>Featured Portfolio & Applications</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Featured <span className="text-gradient">Projects & Platforms</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base lg:text-lg">
            High-impact financial platforms, open-source real-time monorepos, and web
            applications built with Next.js and React.
          </p>
        </div>

        {/* Hero Spotlight Project Banner */}
        {heroProject && (
          <div className="mb-8 sm:mb-10">
            <div className="glass-card glass-card-hover rounded-3xl p-6 sm:p-8 lg:p-10 border border-slate-800/90 relative overflow-hidden group">
              {/* Subtle Ambient Glow */}
              <div className="absolute top-0 right-0 -mt-10 -mr-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none group-hover:bg-cyan-500/20 transition-all duration-500" />
              
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center relative z-10">
                {/* Left Column: Info & Details */}
                <div className="lg:col-span-8 space-y-4">
                  {/* Top Badges */}
                  <div className="flex flex-wrap items-center gap-2.5">
                    <span className="px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-mono text-cyan-300 flex items-center gap-1.5 font-semibold">
                      <Star className="w-3.5 h-3.5 fill-cyan-400 text-cyan-400" /> Flagship Project
                    </span>
                    <span className="text-xs font-mono text-slate-400 px-3 py-1 rounded-full bg-slate-900 border border-slate-800">
                      {heroProject.subtitle}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {heroProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                    {heroProject.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {heroProject.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-lg bg-slate-900 text-xs font-mono text-cyan-300 border border-slate-800"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Right Column: CTA Button & Spotlight Box */}
                <div className="lg:col-span-4 flex flex-col justify-center items-stretch lg:items-end lg:border-l lg:border-slate-800/80 lg:pl-8 space-y-4">
                  <div className="p-4 rounded-2xl bg-slate-900/80 border border-slate-800 text-center lg:text-left space-y-1.5 w-full">
                    <p className="text-xs font-mono text-cyan-400 uppercase tracking-wider">
                      Role & Contribution
                    </p>
                    <p className="text-xs text-slate-300 leading-normal">
                      Software Engineer @ Amartha (WebView Modules & Hybrid Bridge Architecture)
                    </p>
                  </div>

                  <a
                    href={heroProject.url}
                    target="_blank"
                    rel="noreferrer"
                    className="w-full inline-flex items-center justify-center gap-2.5 py-3.5 px-6 rounded-xl bg-gradient-to-r from-cyan-500 via-indigo-500 to-purple-600 font-semibold text-sm text-white shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/35 hover:scale-[1.01] active:scale-[0.99] transition-all duration-200"
                  >
                    <span>View App Store / Play Store</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 3-Column Grid for Secondary Projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {gridProjects.map((proj: Project) => (
            <div
              key={proj.title}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-6 border border-slate-800 flex flex-col justify-between group"
            >
              <div>
                {/* Header Badge */}
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="text-xs font-mono text-cyan-400 px-2.5 py-1 rounded-lg bg-slate-900 border border-slate-800 truncate max-w-[200px]">
                    {proj.subtitle}
                  </span>
                  {proj.featured && (
                    <span className="px-2 py-0.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-[11px] font-mono text-cyan-300 flex items-center gap-1 flex-shrink-0">
                      <Sparkles className="w-3 h-3 text-cyan-400" /> Featured
                    </span>
                  )}
                </div>

                {/* Title */}
                <h3 className="text-lg sm:text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                  {proj.title}
                </h3>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm mt-3 leading-relaxed">
                  {proj.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mt-5">
                  {proj.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-slate-900 text-[11px] font-mono text-slate-300 border border-slate-800"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="mt-6 pt-4 border-t border-slate-800/80">
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 hover:text-cyan-300 border border-slate-800 transition-all font-semibold text-xs"
                >
                  <span>View Repository</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

