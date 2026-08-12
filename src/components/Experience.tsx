import React from 'react';
import {
  Briefcase,
  Calendar,
  MapPin,
  CheckCircle2,
  Building2,
  Code2,
  FileText,
} from 'lucide-react';
import { WORK_EXPERIENCES, Experience as ExperienceType } from '../data/cvData';

export const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-16 sm:py-20 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 sm:space-y-4 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-xs font-mono text-cyan-600 dark:text-cyan-400 shadow-sm dark:shadow-none transition-colors">
            <Briefcase className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
            <span>Career Journey</span>
          </div>
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 dark:text-slate-100 tracking-tight transition-colors">
            Work <span className="text-gradient">Experience</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base lg:text-lg transition-colors">
            5+ years of delivering high-impact web applications across fintech microfinance and
            fast-paced software house environments.
          </p>
        </div>

        {/* Experience Timeline Cards */}
        <div className="space-y-6 sm:space-y-8 max-w-4xl mx-auto">
          {WORK_EXPERIENCES.map((exp: ExperienceType, index: number) => (
            <div
              key={exp.company}
              className="glass-card glass-card-hover rounded-2xl p-5 sm:p-8 border border-slate-200/80 dark:border-slate-800/90 relative overflow-hidden group transition-colors"
            >
              {/* Left Color Accent Bar */}
              <div
                className={`absolute top-0 left-0 bottom-0 w-1.5 ${
                  index === 0
                    ? 'bg-gradient-to-b from-cyan-500 to-indigo-600'
                    : 'bg-gradient-to-b from-indigo-500 to-purple-600'
                }`}
              />

              <div className="space-y-5 sm:space-y-6">
                {/* Card Header: Role & Company */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4 border-b border-slate-200 dark:border-slate-800/80 pb-4 transition-colors">
                  <div>
                    <div className="flex items-center gap-2.5 flex-wrap">
                      <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100 group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {exp.role}
                      </h3>
                      <span className="px-2.5 py-0.5 sm:px-3 sm:py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-xs font-semibold text-cyan-700 dark:text-cyan-400">
                        {exp.type}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-slate-700 dark:text-slate-300 font-semibold text-sm sm:text-base mt-1 transition-colors">
                      <Building2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                      <span>{exp.company}</span>
                    </div>
                  </div>

                  {/* Meta: Period & Location */}
                  <div className="flex flex-wrap sm:flex-col sm:items-end text-xs font-mono text-slate-500 dark:text-slate-400 gap-3 sm:gap-1 pt-1 sm:pt-0 border-t sm:border-0 border-slate-200 dark:border-slate-800/60 transition-colors">
                    <span className="flex items-center gap-1.5 text-cyan-700 dark:text-cyan-300 font-semibold">
                      <Calendar className="w-3.5 h-3.5 flex-shrink-0" />
                      {exp.period}
                    </span>
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-slate-400 dark:text-slate-500 flex-shrink-0" />
                      {exp.location}
                    </span>
                  </div>
                </div>

                {/* Highlights List */}
                <div className="space-y-3">
                  <h4 className="text-[11px] sm:text-xs uppercase tracking-wider text-slate-500 dark:text-slate-400 font-mono flex items-center gap-1.5 transition-colors">
                    <FileText className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 flex-shrink-0" />
                    Key Responsibilities & Achievements:
                  </h4>
                  <ul className="grid grid-cols-1 gap-2.5">
                    {exp.highlights.map((item, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2.5 text-slate-700 dark:text-slate-300 text-xs sm:text-sm leading-relaxed transition-colors"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack Pills */}
                <div className="pt-4 border-t border-slate-200 dark:border-slate-800/60 flex items-center gap-2 flex-wrap transition-colors">
                  <span className="text-xs font-mono text-slate-400 dark:text-slate-500 flex items-center gap-1">
                    <Code2 className="w-3.5 h-3.5" /> Tech:
                  </span>
                  {exp.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-900 text-xs font-mono text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-800 transition-colors"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
