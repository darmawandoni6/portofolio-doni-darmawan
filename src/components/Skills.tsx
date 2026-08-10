import React from 'react';
import { Cpu, Layout, Server, Wrench, CheckCircle2 } from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/cvData';

export const Skills: React.FC = () => {
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Frontend Stack':
        return <Layout className="w-5 h-5 text-cyan-400" />;
      case 'Backend & Database':
        return <Server className="w-5 h-5 text-indigo-400" />;
      default:
        return <Wrench className="w-5 h-5 text-purple-400" />;
    }
  };

  return (
    <section id="skills" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-xs font-mono text-cyan-400">
            <Cpu className="w-4 h-4 text-cyan-400" />
            <span>Technical Capabilities</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Skills & <span className="text-gradient">Tech Stack</span>
          </h2>
          <p className="text-slate-400 text-sm sm:text-base lg:text-lg">
            Comprehensive skill set built over 5+ years of engineering robust web applications,
            microservices, and testing suites.
          </p>
        </div>

        {/* Skill Category Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SKILL_CATEGORIES.map((cat) => (
            <div
              key={cat.category}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-8 border border-slate-800 flex flex-col justify-between"
            >
              <div>
                {/* Category Header */}
                <div className="flex items-center gap-3 mb-5 pb-4 border-b border-slate-800/80">
                  <div className="p-2.5 rounded-xl bg-slate-900 border border-slate-800">
                    {getCategoryIcon(cat.category)}
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-100">{cat.category}</h3>
                </div>

                {/* Skill Pills */}
                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <div
                      key={skill}
                      className="px-2.5 py-1.5 sm:px-3 sm:py-2 rounded-xl bg-slate-900/90 hover:bg-slate-800/90 border border-slate-800 hover:border-cyan-500/40 text-xs sm:text-sm font-medium text-slate-200 hover:text-cyan-300 transition-all duration-200 flex items-center gap-1.5 sm:gap-2 group"
                    >
                      <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                      <span>{skill}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Note */}
              <div className="mt-6 pt-4 border-t border-slate-800/60 text-xs font-mono text-slate-500">
                <span>Verified in production environments</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
